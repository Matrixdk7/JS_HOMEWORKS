import {BASE_URL} from "./config.js";

export const fetchUserById = async ( userId ) => {
    const res = await fetch(`${BASE_URL}/users/${userId}`);
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
}

export const fetchUsers = async () => {
    const res = await fetch(`${BASE_URL}/users`);
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
};

export const createUser = async (userData) => {
    const res = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!res.ok) throw new Error('Failed to create user');

    return res.json();
};

export const updateUser = async (id, userData) => {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!res.ok) throw new Error('Failed to update user');

    return res.json();
};

export const deleteUser = async (id) => {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'DELETE'
    });

    if (!res.ok) throw new Error('Failed to delete user');

    return true;
};

export const UserFormTemplate = (data = {}) => ({
    id: data.id,
    name: data.name || '',
    username: data.username || '',
    email: data.email || '',
    phone: data.phone || '',
    website: data.website || '',
    city: data.address?.city || '',
    street: data.address?.street || '',
    companyName: data.company?.name || ''
});