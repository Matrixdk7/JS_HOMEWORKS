import { profileModel } from './modules/profileModel.js';
import initUIHandlers from './modules/uiHandlers.js';

const firstNameInput = document.getElementById('firstName');
const lastNameInput  = document.getElementById('lastName');
const emailInput     = document.getElementById('email');
const errorsBlock    = document.getElementById('errors');

// Ui Init
initUIHandlers({ profileModel, firstNameInput, lastNameInput, emailInput, errorsBlock });

// Debug
console.log(Object.getOwnPropertyDescriptors(profileModel));
