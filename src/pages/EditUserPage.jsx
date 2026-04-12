import { fetchUserById, updateUser } from '../api/usersApi';
import { UserFormTemplate } from '../api/usersApi'; // или ../utils
import UserForm from '../components/UserForm';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import { useToast } from '../components/Toasts/UseToast';

const EditUserPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const { addToast } = useToast();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const data = await fetchUserById(id);
                setUser(UserFormTemplate(data));
            } finally {
                setLoading(false);
            }
        };
        loadUser();
    }, [id]);

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await updateUser(id, values);
            addToast('User updated successfully', 'success');
            navigate('/users');
        } catch (err) {
            addToast(err.message, 'danger');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <Loader />;

    return <>
        <h1 className="text-center">Edit user info</h1>
        <UserForm initialValues={UserFormTemplate(user)} onSubmit={handleSubmit} />
        </>
};

export default EditUserPage;