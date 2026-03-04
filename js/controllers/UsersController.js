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
            this.#setupEventListeners();
        });
    }

    async loadUsers() {
        try {
            const users = await this.#model.getAll();
            this.#view.renderList(users);
        } catch (err) {
            this.#view.showError(err.message);
        }
    }

    #setupEventListeners() {
        // 1. Add user button
        // 2. Edit buttons in table
        // 3. Delete buttons in table
    }
}

export default UsersController;