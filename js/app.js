import Model from "./notes/Model.js";
import Controller from "./notes/Controller.js";
import View from "./notes/View.js";

// Validation model
const notesItemValidationModel = {
    title: 'string',
    category: ['work', 'study', 'personal'],
    important: 'boolean',
    createdAt: 'string'
}

const modelInstance = new Model('note-list', notesItemValidationModel);
const viewInstance = new View();

const controllerInstance = new Controller(modelInstance, viewInstance);
controllerInstance.init()

// Test data
const m = new Model('note-item', notesItemValidationModel);
m.create({
    title: 'Homework',
    category: 'study',
    important: true,
    createdAt: '18.02.2026',
});