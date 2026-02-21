class Controller {
    #model = null;
    #view = null;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.#view.renderList(this.#model.readAll());
            this.#view.editForm.addEventListener('submit', this.#submitHandler);
            this.#view.clearAllBtn.addEventListener('click', this.#clearAllHandler);
            this.#view.notesList.addEventListener('click', this.#noteControl);
        })
    }

    #submitHandler = (e) => {
        e.preventDefault();
        const {target: form} = e;
        const formData = {}
        const inputs = form.querySelectorAll('input:not([type="submit"]), textarea, select');
        inputs.forEach(({name, value}) => formData[name] = value);

        try {
            const newNote = this.#model.create(formData);
            this.#view.renderList(this.#model.readAll());
            form.reset();
        } catch (err) {
            alert(err.message);
        }

    }

    #clearAllHandler = (e) => {
        this.#model.clearAll();
        this.#view.renderList(this.#model.readAll());
    }

    #noteControl = (e) => {
        const card = e.target.closest('.card');
        if (!card) return;
        const id = Number(card.dataset.id);

        if(e.target.classList.contains('js-delete')) {
            this.#model.delete(id);
        }

        if(e.target.classList.contains('js-toggle-important')) {
            this.#model.toggleImportant(id);
        }

        this.#view.renderList(this.#model.readAll());
    }

}

export default Controller;