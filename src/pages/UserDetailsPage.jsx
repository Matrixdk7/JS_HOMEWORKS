import React, { useEffect, useState } from 'react';
import { fetchUserById, UserFormTemplate } from "../api/usersApi";
import { useParams, Link } from 'react-router-dom';
import { Button, Card } from "react-bootstrap";
import Loader from "../components/Loader.jsx";
import { Pencil } from 'react-bootstrap-icons';
import './userDetailsPage.css';

const getInitials = (name) => {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};

const UserDetailsPage = () => {
    const { id } = useParams();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const data = await fetchUserById(id);
                setUser(UserFormTemplate(data));
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        loadUser();
    }, [id]);

    if (loading) return <Loader />;
    if (error) return (
        <Card className="ud-card">
            <p className="text-danger">Error loading user</p>
            <Button as={Link} to="/users" variant="secondary">Back to List</Button>
        </Card>
    );

    return (
        <Card className="ud-card">
            <div className="ud-header">
                <div className="ud-avatar">
                    {getInitials(user.name)}
                </div>

                <div className="ud-name-wrapper">
                    <h2 className="ud-name">{user.name}</h2>

                    <Link
                        to={`/users/${user.id}/edit`}
                        className="ud-edit-btn"
                    >
                        <Pencil size={18} />
                    </Link>
                </div>
            </div>

            <div className="ud-section">
                <h5 className="ud-section-title">Contacts</h5>
                <p><strong>Username:</strong> <span className="text-secondary">{user.username}</span></p>
                <p><strong>Email:</strong> <span className="text-secondary">{user.email}</span></p>
                <p><strong>Phone:</strong> <span className="text-secondary">{user.phone}</span></p>
                <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="text-info">{user.website}</a></p>
            </div>

            <div className="ud-section">
                <h5 className="ud-section-title">Address</h5>
                <p><strong>City:</strong> <span className="text-secondary">{user.address?.city}</span></p>
                <p><strong>Street:</strong> <span className="text-secondary">{user.address?.street}</span></p>
            </div>

            <div className="ud-section">
                <h5 className="ud-section-title">Company</h5>
                <p><strong>Name:</strong> <span className="text-secondary">{user.company?.name}</span></p>
            </div>

            <div className="d-flex justify-content-end mt-3">
                <Button as={Link} to="/users" variant="secondary">
                    Back to List
                </Button>
            </div>
        </Card>
    );
};

export default UserDetailsPage;