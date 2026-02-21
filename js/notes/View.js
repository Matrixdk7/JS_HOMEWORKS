class View {
    constructor() {
        this.editForm = document.querySelector('#noteForm');
        this.notesList = document.querySelector('#notesList');
        this.clearAllBtn = document.querySelector('#clearAllBtn');
        this.emptyMessage = document.querySelector('#emptyMessage');
    }

    #createNoteCard(note) {
        const wrapper = document.createElement('div');
        const importantClass = note.important ? 'border border-warning border-2' : '';


        const layout = `<div class="col-md-4">
                  <div class="card h-100 ${importantClass}" data-id="${note.id}">
                    <div class="card-body d-flex flex-column">
                      <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="card-title mb-0">${note.title}</h5>
                        <span class="badge bg-secondary">${note.category}</span>
                      </div>
                      <p class="card-text text-muted small mb-3">
                        ${note.createdAt}
                      </p>
                      <div class="mt-auto d-flex gap-2">
                        <button class="btn btn-sm btn-outline-warning js-toggle-important">
                          Toggle important
                        </button>
                        <button class="btn btn-sm btn-outline-danger js-delete">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                `
            wrapper.innerHTML = layout;

        return wrapper.firstElementChild;
    }



    renderList(notes) {
        this.notesList.innerHTML = '';

        if(notes.length === 0) {
            this.emptyMessage.classList.remove("d-none");
            return;
        }

        this.emptyMessage.classList.add("d-none");

        for(let i = 0; i < notes.length; i++) {
            const card = this.#createNoteCard(notes[i]);
            this.notesList.appendChild(card);
        }
    }

}

export default View;