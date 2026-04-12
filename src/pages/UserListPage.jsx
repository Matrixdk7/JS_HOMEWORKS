import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../api/usersApi';
import UsersTable from '../components/UsersTable';
import { useToast } from '../components/Toasts/useToast';
import ConfirmModal from "../components/Modal/ConfirmModal.jsx";
import Loader from "../components/Loader.jsx";
import { useOutletContext } from 'react-router-dom';

const UserListPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToast } = useToast();
    const [showModal, setShowModal] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadUsers();
    }, []);

    const handleDelete = async (id) => {
        setSelectedUserId(id);
        setShowModal(true);
    };

    const confirmDelete = async () => {
        setDeleting(true);
        try {
            await deleteUser(selectedUserId);
            setUsers(prev => prev.filter(u => u.id !== selectedUserId));
            addToast('User deleted successfully', 'success');
        } catch (err) {
            addToast(err.message, 'danger');
        } finally {
            setDeleting(false);
            setShowModal(false);
            setSelectedUserId(null);
        }
    };

    const { search } = useOutletContext();

    if (loading) return <Loader />;
    if (error) return <div>Failed to load users</div>;

    return (
        <>
            <h1>Users</h1>
            <UsersTable users={users} search={search} onDelete={handleDelete} />

            <ConfirmModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={confirmDelete}
                title="Delete user"
                body="Are you sure you want to delete this user?"
            />
        </>
    );
};

export default UserListPage;