import createContactModalLayout from "./createContactModalLayout.js";

const initContactsModal = () => {
    const modalLayoutConfig = {
        id: 'addContactModal',
        title: 'Add Contact'
    }

    const modalLayout = createContactModalLayout(modalLayoutConfig);
    document.body.append(modalLayout._element);

    return modalLayout;
}

const uiContactsHandler = () => {
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

export { uiContactsHandler, initContactsModal };