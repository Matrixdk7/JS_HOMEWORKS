class UsersController {
    #model = null;
    #view = null;
    sortAscending = true;

    constructor(model,view) {
        this.#model = model;
        this.#view = view;
    }

    #setupEventListeners() {
        const nameHeader = document.getElementById('nameHeader');
        nameHeader.addEventListener('click', () => {
            this.sortUsersByName();
        });
    }

    sortUsersByName() {
        this.users.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            if (nameA < nameB) return this.sortAscending ? -1 : 1;
            if (nameA > nameB) return this.sortAscending ? 1 : -1;
            return 0;
        });

        this.sortAscending = !this.sortAscending;
        this.#view.renderList(this.users);
    }

    async init() {
        document.addEventListener('DOMContentLoaded', async () => {
            await this.loadUsers();
            this.#view.addUserBtn.addEventListener('click', this.#addUserBtn);
            this.#view.usersTable.addEventListener('click', this.#controlUserBtn);
            this.#setupEventListeners();
        });
    }

    async loadUsers() {
        try {
            this.#view.showLoading();
            const users = await this.#model.getAll();
            this.users = users;
            this.#view.renderList(users);
        } catch (err) {
            this.#view.showError(err.message);
        } finally {
            this.#view.hideLoading();
        }
    }

    #addUserBtn = () => {
        const modal = this.#view.getCreateUserModal();
        this.#view.showModal(modal);

        const saveBtn = modal._element.querySelector('[data-action="save"]');

        saveBtn.addEventListener('click', async () => {
            const form = modal._element.querySelector('form');
            if (!this.#view.validateUserForm(form)) return;

            try {
                this.#view.showLoading();
                saveBtn.disabled = true;

                const data = this.#view.getFormData(form);
                const newUser = await this.#model.create(data);
                const tbody = this.#view.usersTable;
                const tr = document.createElement('tr');
                tr.innerHTML = `
                <td>${newUser.id}</td>
                <td>${newUser.name}</td>
                <td>${newUser.email}</td>
                <td>${newUser.phone || '-'}</td>
                <td>${newUser.company?.name || '-'}</td>
                <td class="text-end">
                    <button class="btn btn-sm btn-primary edit-btn" data-id="${newUser.id}">Edit</button>
                    <button class="btn btn-sm btn-danger delete-btn" data-id="${newUser.id}">Delete</button>
                </td>
            `;
                tbody.appendChild(tr);

                this.#view.hideModal(modal);
                this.#view.showSuccess('User added successfully!');

            } catch (err) {
                this.#view.showError(err.message);
            } finally {
                this.#view.hideLoading();
                saveBtn.disabled = false;
            }
        }, { once: true });
    }

    #controlUserBtn = (e) => {
        const btn = e.target.closest('button[data-id]');
        if (!btn) return;

        const id = btn.dataset.id;
        const user = this.users.find(u => u.id == id);

        if (btn.classList.contains('edit-btn')) {
            this.#handleEditUser(user);
        } else if (btn.classList.contains('delete-btn')) {
            this.#handleDeleteUser(user);
        }
    }

    #handleEditUser = (user) => {
        const modal = this.#view.getEditUserModal(user);
        this.#view.showModal(modal);

        const saveBtn = modal._element.querySelector('[data-action="save"]');

        saveBtn.addEventListener('click', async () => {
            const form = modal._element.querySelector('form');
            if (!this.#view.validateUserForm(form)) return;

            try {
                this.#view.showLoading();

                const data = this.#view.getFormData(form);
                const updatedUser = await this.#model.update(user.id, data);

                const row = this.#view.usersTable.querySelector(`button[data-id="${user.id}"]`).closest('tr');
                row.innerHTML = `
                <td>${updatedUser.id}</td>
                <td>${updatedUser.name}</td>
                <td>${updatedUser.email}</td>
                <td>${updatedUser.phone || '-'}</td>
                <td>${updatedUser.company?.name || '-'}</td>
                <td class="text-end">
                    <button class="btn btn-sm btn-primary edit-btn" data-id="${updatedUser.id}">Edit</button>
                    <button class="btn btn-sm btn-danger delete-btn" data-id="${updatedUser.id}">Delete</button>
                </td>`;
                this.#view.hideModal(modal);
                this.#view.showSuccess('User edit successfully!');

            } catch (err) {
                this.#view.showError(err.message);
            } finally {
                this.#view.hideLoading();
            }

        }, { once: true });
    }

    #handleDeleteUser = (user) => {
        const modal = this.#view.getDeleteUserModal(user);
        this.#view.showModal(modal);

        const confirmBtn = modal._element.querySelector('[data-confirm-btn]');

        confirmBtn.addEventListener('click', async () => {
            try {
                this.#view.showLoading();

                await this.#model.delete(user.id);

                const row = this.#view.usersTable.querySelector(`button[data-id="${user.id}"]`).closest('tr');
                row.remove();

                this.#view.hideModal(modal);
                this.#view.showSuccess('User delete successfully!');

            } catch (err) {
                this.#view.showError(err.message);
            } finally {
                this.#view.hideLoading();
            }
        }, { once: true });
    }
}

export default UsersController;