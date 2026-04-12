import React from 'react';
import UserForm from '../components/UserForm';
import { useNavigate } from 'react-router-dom';
import {createUser, UserFormTemplate} from '../api/usersApi';
import {useToast} from "../components/Toasts/useToast.js";

const CreateUserPage = () => {
    const navigate = useNavigate();
    const { addToast } = useToast();

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await createUser(values);
            addToast('User created successfully', 'success');
            navigate('/users');
        } catch (err) {
            addToast(err.message, 'danger');
        } finally {
            setSubmitting(false);
        }
    };

    return <>
        <h1 className="text-center">Create user</h1>
        <UserForm initialValues={UserFormTemplate()} onSubmit={handleSubmit} />
    </>;
};

export default CreateUserPage;