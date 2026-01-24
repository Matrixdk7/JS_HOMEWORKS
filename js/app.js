'use strict';

import contactsManagement from "./modules/contactManagement.js";
import { uiContactsHandler, initContactsModal } from "./modules/uiContactsHandler.js";
import initConfirmModal from "./modules/uiConfirmHandler.js";
import initToast from "./modules/toastGenerator.js";

(function(){

    const listHandler = uiContactsHandler();
    const contactService = contactsManagement();

    // Toasts
    const toastAdded = initToast({ id: 'contactAdded', title: 'Contact Added!', defaultText: 'Contact Added!' });
    const toastDeleted = initToast({ id: 'contactDeleted', title: 'Contact Deleted!', defaultText: 'Contact Deleted!' });

    // Events
    // Add contact
    const addContactModal = initContactsModal();
    const modalTrigger = document.querySelector('[data-add-contact-modal-btn]');
    modalTrigger.addEventListener('click',  () => addContactModal.toggle());

    addContactModal._element.querySelector(`form`)
        .addEventListener('submit', evt => {
            evt.preventDefault();
            const inputs = evt.target.querySelectorAll('input, textarea');
            const data = Array.from(inputs).reduce((acc, input) => {
                const {name, value} = input;
                acc[name] = value
                return acc;
            }, {})

            contactService.addContact(data);
            const savedContact = contactService.getContacts().at(-1)
            listHandler.addElement(savedContact)

            addContactModal.hide();
            toastAdded.show()
            evt.target.reset();

        });

    // Delete Contact
    const confirmDelete = initConfirmModal({
        title: 'Confirm deletion'
    });

    const contactsList = document.querySelector('[data-contacts-list]');
    contactsList.addEventListener('click', (event) => {
        const btn = event.target.closest('button');
        if (!btn) return;

        const li = btn.closest('li');
        if (!li) return;

        const id = li.dataset.id;
        const name = li.textContent.split('|')[0].trim();

        confirmDelete.open({
            text: `Delete ${name}?`,
            onConfirm() {
                contactService.removeContact(id);
                listHandler.removeElement(id);
                toastDeleted.show();
            }
        });
    });

})()