'use strict';

'use strict';

const user = {
    name: 'Vova',
    age: 20,
}

let {name} = user; // Vova
let {age: year} = user; // 20


// IFFE
// Global Scope
(function(){
    // Just for example
    const validationRegExps = {
        'fullName': /^(?=.{2,80}$)[\p{L}]+(?:[ '\-][\p{L}]+){0,3}$/u,
        'phone': /^\+[1-9]\d{7,14}$/,
        'address': /^(?=.{5,120}$)[\p{L}\d][\p{L}\d\s.,'’\-\/#]+$/u
    }

    const errorMessages = {
        'fullName': 'Full Name Required',
        'phone': 'Phone Number Required',
        'address': 'Address Required',
    }

    // UI Handling

    const uiContactsListHandler = () => {
        const contactsAlert = document.querySelector('[data-contacts-alert]');
        const contactsList = document.querySelector('[data-contacts-list]');

        const createItemTemplate = ({ id, fullName, phone, address }) => {
            const li = document.createElement('li');
            li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
            li.dataset.id = id;
            li.innerHTML = `${fullName} | ${phone} | ${address}`;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2'); // пример стилей
            li.append(deleteBtn);

            return li;
        }

        const addElement = (data) => {
            const element = createItemTemplate(data)
            contactsList.prepend(element)
            contactsList.classList.remove('d-none');
            contactsAlert.classList.add('d-none');
        }

        const removeElement = (id) => {
            const li = contactsList.querySelector(`li[data-id="${id}"]`);
            if (!li) return;

            li.remove();

            if (!contactsList.children.length) {
                contactsList.classList.add('d-none');
                document.querySelector('[data-contacts-alert]').classList.remove('d-none');
            }
        }


        return {
            addElement,
            removeElement,
        }

    }
    const listHandler = uiContactsListHandler()


    // General Variables
    const toastAdded = new bootstrap.Toast(document.querySelector('#contactAdded'))
    const addContactModalSelector = '#addContactModal';
    const addContactModal = new bootstrap.Modal(addContactModalSelector, {
        keyboard: false,
        backdrop: 'static'
    });
    const modalTrigger = document.querySelector('[data-add-contact-modal-btn]');
    const confirmDeleteModal = new bootstrap.Modal(document.querySelector('#confirmDeleteModal'), {
        keyboard: true,
        backdrop: true
    });
    const toastDeleted = new bootstrap.Toast(document.querySelector('#contactDeleted'));



    // State management
    const contactsManagement = () => {
        const contacts = [];

        const getContacts = () => {
            return structuredClone(contacts);
        }

        const addContact = (data) => {
            const contact = {
                id: Date.now(),
                ...data
            };

            contacts.push(contact);
            console.log(contact)
        }

        const removeContact = (id) => {
            const index = contacts.findIndex(contact => contact.id === Number(id));
            if (index === -1) return false;

            contacts.splice(index, 1);
            return true;
        }

        return {
            getContacts,
            addContact,
            removeContact
        }
    }
    const contactService = contactsManagement();



    // Events
    modalTrigger.addEventListener('click', () => {
        addContactModal.show()
    })

    addContactModal._element.querySelector(`form#add-contact-form`)
        .addEventListener('submit', evt => {
            evt.preventDefault();
            let formValidated = true;
            const inputs = evt.target.querySelectorAll('input, textarea');
            const data = Array.from(inputs).reduce((acc, input) => {
                const {name, value, parentElement: wrapper} = input;

                if(validationRegExps[name].test(value)) {
                    acc[name] = value
                } else {
                    const errBlock = document.createElement('div');
                    errBlock.innerHTML = errorMessages[name];
                    errBlock.classList.add('text-danger', 'error-validation');
                    wrapper.append(errBlock)
                    formValidated = false;
                }
                return acc;
            }, {})

            if(!formValidated) return null

            contactService.addContact(data);
            const savedContact = contactService.getContacts().at(-1)
            listHandler.addElement(savedContact)

            addContactModal.hide();
            toastAdded.show()
            evt.target.reset();
            document.querySelectorAll('.error-validation').forEach(item => item.remove())

        })

    let contactIdToDelete = null;
    const contactsList = document.querySelector('[data-contacts-list]');

    contactsList.addEventListener('click', (event) => {

        const deleteBtn = event.target.closest('button');
        if (!deleteBtn) return;

        const li = deleteBtn.closest('li');
        if (!li) return;

        contactIdToDelete = li.dataset.id;
        const contactName = li.textContent.split('|')[0].trim();
        document.querySelector('#confirmDeleteText').textContent = `Delete ${contactName}?`;
        confirmDeleteModal.show();
    });

    const confirmBtn = document.querySelector('#confirmDeleteBtn');
    console.log('Confirm button:', confirmBtn);

    confirmBtn.addEventListener('click', () => {
        const removed = contactService.removeContact(contactIdToDelete);
        if (removed) {
            listHandler.removeElement(contactIdToDelete);
            contactIdToDelete = null;
            confirmDeleteModal.hide();
            toastDeleted.show();
        }
    });

})()
// Global Scope