import { API } from '../config/api.js';

class UsersModel {
    constructor() {
        this.users = [];
    }

    _updateUserInState(id, updatedUser) {
        const index = this.users.findIndex(u => u.id === id);
        if (index !== -1) {
            this.users[index] = updatedUser;
        }
    }

    async _handleResponse(response) {
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
    }

    async getAll() {
        try {
            const url = API.BASE_URL + API.ENDPOINTS.USERS;
            const response = await fetch(url);
            const data = await this._handleResponse(response);

            this.users = data;

            return this.users;

        } catch (error) {
            throw error;
        }
    }
    async create(userData) {
        try {
            const url = API.BASE_URL + API.ENDPOINTS.USERS;
            const response = await fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                }
            );

            const createdUser = await this._handleResponse(response);

            createdUser.id = Date.now();
            this.users.push(createdUser);

            return createdUser;

        } catch (error) {
            throw error;
        }
    }
    async update(id, userData) {
        try {
            const url = API.BASE_URL + API.ENDPOINTS.USERS + '/' + id;
            const response = await fetch(
                url,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                }
            );

            const updatedUser = await this._handleResponse(response);

            this._updateUserInState(id, updatedUser);

            return updatedUser;

        } catch (error) {
            throw error;
        }
    }
    delete(id) {
        const url = API.BASE_URL + API.ENDPOINTS.USERS + '/' + id;

        return fetch(url, { method: 'DELETE' })
            .then(response => {
                if (!response.ok) throw new Error('Failed to delete user');

                this.users = this.users.filter(user => user.id !== id);
                return id;
            })
            .catch(error => { throw error; });
    }
}

export default UsersModel;