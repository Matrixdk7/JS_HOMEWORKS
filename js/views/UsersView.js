import createModal from "./modals/modalGenerator.js";

class UsersView {
    constructor() {
        this.modals = {};
    }

    #getCreateUserModal(user = {}) {
        const body = `
        <form id="userForm_createUser">
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" name="name" class="form-control" value="${user.name || ''}" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" name="email" class="form-control" value="${user.email || ''}" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Phone</label>
                <input type="text" name="phone" class="form-control" value="${user.phone || ''}">
            </div>
            <div class="mb-3">
                <label class="form-label">Company</label>
                <input type="text" name="company" class="form-control" value="${user.company?.name || ''}">
            </div>
        </form>
    `;

        const footer = `
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" data-action="save" class="btn btn-primary">Save</button>
    `;

        const modal = createModal({ id: 'createUser', title: 'Add User' }, body, footer);
        this.modals.createUser = modal;
        return modal;
    }

    #getEditUserModal(user) {
        const body = `
        <form id="userForm_editUser">
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" name="name" class="form-control" value="${user.name}" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" name="email" class="form-control" value="${user.email}" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Phone</label>
                <input type="text" name="phone" class="form-control" value="${user.phone}">
            </div>
            <div class="mb-3">
                <label class="form-label">Company</label>
                <input type="text" name="company" class="form-control" value="${user.company?.name || ''}">
            </div>
        </form>
    `;

        const footer = `
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" data-action="save" class="btn btn-primary">Save</button>
    `;

        const modal = createModal({ id: 'editUser', title: 'Edit User' }, body, footer);
        this.modals.editUser = modal;
        return modal;
    }

    #getDeleteUserModal(user) {
        const body = `<p>Are you sure you want to delete <strong>${user.name}</strong>?</p>`;
        const footer = `
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-danger" data-confirm-btn>Confirm</button>
    `;
        const modal = createModal({ id: 'deleteUser', title: 'Delete User' }, body, footer);
        this.modals.deleteUser = modal;
        return modal;
    }

    showModal(modal) {
        modal.show();
    }

    hideModal(modal) {
        modal.hide();
    }

    renderList(users) {
        const tbody = document.getElementById('usersTableBody');
        tbody.innerHTML = '';

        users.forEach(user => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone || '-'}</td>
            <td>${user.company?.name || '-'}</td>
            <td class="text-end">
                <button class="btn btn-sm btn-primary edit-btn" data-id="${user.id}">Edit</button>
                <button class="btn btn-sm btn-danger delete-btn" data-id="${user.id}">Delete</button>
            </td>
        `;

            tbody.appendChild(tr);
        });
    }

    showLoading() {
        document.getElementById('loadingSpinner').classList.remove('d-none');
    }

    hideLoading() {
        document.getElementById('loadingSpinner').classList.add('d-none');
    }

    validateUserForm(form) {
        let isValid = true;

        const nameInput = form.querySelector('input[name="name"]');
        const emailInput = form.querySelector('input[name="email"]');

        // Reset errors
        [nameInput, emailInput].forEach(input => {
            input.classList.remove('is-invalid');
        });

        // Name
        if (!nameInput.value.trim()) {
            nameInput.classList.add('is-invalid');
            isValid = false;
        }

        // Email
        if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        }

        return isValid;
    }

    getFormData(form) {
        return {
            name: form.querySelector('input[name="name"]').value.trim(),
            email: form.querySelector('input[name="email"]').value.trim(),
            phone: form.querySelector('input[name="phone"]').value.trim(),
            company: { name: form.querySelector('input[name="company"]').value.trim() }
        };
    }
}

export default UsersView;