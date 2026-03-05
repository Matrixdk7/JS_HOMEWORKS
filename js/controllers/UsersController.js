class UsersController {
    #model = null;
    #view = null;

    constructor(model,view) {
        this.#model = model;
        this.#view = view;
    }

    async init() {
        document.addEventListener('DOMContentLoaded', async () => {
            await this.loadUsers();
            this.#view.addUserBtn.addEventListener('click', this.#addUserBtn);
            this.#view.usersTable.addEventListener('click', this.#controlUserBtn);
        });
    }

    async loadUsers() {
        try {
            const users = await this.#model.getAll();
            this.users = users;
            this.#view.renderList(users);
        } catch (err) {
            this.#view.showError(err.message);
        }
    }

    #addUserBtn = () => {
        const modal = this.#view.getCreateUserModal();
        this.#view.showModal(modal);

        const saveBtn = modal._element.querySelector('[data-action="save"]');
        saveBtn.addEventListener('click', async () => {
            const form = modal._element.querySelector('form');
            if (!this.#view.validateUserForm(form)) return;

            const data = this.#view.getFormData(form);
            const newUser = await this.#model.create(data);

            this.#view.renderList(this.#model.users);
            this.#view.hideModal(modal);
        });
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

            const data = this.#view.getFormData(form);
            const updatedUser = await this.#model.update(user.id, data);

            this.#view.renderList(this.#model.users);
            this.#view.hideModal(modal);
        });
    }

    #handleDeleteUser = (user) => {
        const modal = this.#view.getDeleteUserModal(user);
        this.#view.showModal(modal);

        const confirmBtn = modal._element.querySelector('[data-confirm-btn]');
        confirmBtn.addEventListener('click', async () => {
            await this.#model.delete(user.id);

            this.#view.renderList(this.#model.users);
            this.#view.hideModal(modal);
        });
    }
}

export default UsersController;