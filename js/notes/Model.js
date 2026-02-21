class Model {
    #key = null;
    #validationModel = null;

    constructor(key, validationModel) {
        this.#key = key;
        this.#validationModel = validationModel;
    }

    #isElementExists(id) {
        const data = this.readAll();
        return data.some((item) => item.id === id);
    }

    #validateEntity(data) {
        const errorFields = [];

        for (const key in this.#validationModel) {
            if (data[key] === undefined) {
                errorFields.push({key, message: 'Field is missing'});
                continue;
            }

            const validationModelKey = this.#validationModel[key];
            const value = data[key];

            if (Array.isArray(validationModelKey) && !validationModelKey.includes(value)) {
                errorFields.push({key, message: `Field should be one of ${validationModelKey}`});
                continue;
            }

            if (!Array.isArray(validationModelKey) && typeof value !== validationModelKey) {
                errorFields.push({key, message: `Field should be of type ${validationModelKey}`});
                continue;
            }

            if (key === 'title' && value.trim().length < 3) {
                errorFields.push({key, message: 'Title must be at least 3 characters'});
            }
        }

        // for (const key in data) {
        //     if (!Object.hasOwn(this.#validationModel, key)) {
        //         errorFields.push({key, message: `Field doesn't exist on validation model`});
        //     }
        // }

        if (errorFields.length) {
            throw new Error(`Failed to validate entity: ${JSON.stringify(errorFields)}`);
        }

        return true;

    }

    create(data) {
        if (data.important === undefined) data.important = false;
        if (data.createdAt === undefined) data.createdAt = new Date().toISOString();
        this.#validateEntity(data);
        const noteItem = {};

        for (const key in this.#validationModel) {
            if (data[key] !== undefined) {
                noteItem[key] = data[key];
            } else {
                if (key === 'important') noteItem[key] = false;
                if (key === 'createdAt') noteItem[key] = new Date().toISOString();
            }
        }

        // Generate id
        noteItem.id = new Date().getTime();

        // Add noteItem to storage
        const noteItemsList = this.readAll();
        noteItemsList.push(noteItem);
        localStorage.setItem(this.#key, JSON.stringify(noteItemsList));

        return noteItem;
    }

    readAll() {
        return JSON.parse(localStorage.getItem(this.#key)) || [];
    }

    toggleImportant(id) {
        if(!this.#isElementExists(id)) throw new Error(`Cannot toggleImportant entity with id ${id}`);
        const noteItemsList = this.readAll();

        for (let i = 0; i < noteItemsList.length; i++) {
            if (noteItemsList[i].id === id) {
                noteItemsList[i].important = !noteItemsList[i].important;
                break;
            }
        }
        localStorage.setItem(this.#key, JSON.stringify(noteItemsList));
    }

    delete(id) {
        let noteItemsList = this.readAll();
        if (noteItemsList.length === 0)  throw new Error(`Storage is empty`);
        if(!this.#isElementExists(id)) throw new Error(`Cannot delete entity with id ${id}`);

        noteItemsList = noteItemsList.filter(item => item.id !== id);
        localStorage.setItem(this.#key, JSON.stringify(noteItemsList));

        return true;
    }

    clearAll() {
        localStorage.setItem(this.#key, JSON.stringify([]));
    }

}

export default Model;