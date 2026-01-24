'use strict';

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

export default contactsManagement;