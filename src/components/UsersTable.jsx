import React from 'react';
import { Table, Card, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './usersTable.css';

const getInitials = (name) => {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};


const UsersTable = ({ users, onDelete, search }) => {
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(`/users/${id}`);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.username.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Card className="users-card">
            <Card.Body className="p-0">
                <Table hover responsive className="users-table mb-0 align-middle table-dark">
                    <thead>
                    <tr>
                        <th className="ps-4 text-secondary">User</th>
                        <th className="text-secondary">Email</th>
                        <th className="text-secondary">Phone</th>
                        <th className="text-secondary">Website</th>
                        <th className="text-end pe-4"></th>
                    </tr>
                    </thead>

                    <tbody>
                    {filteredUsers.map((user, index) => (
                        <tr
                            key={user.id}
                            className={`user-row ${index % 2 === 0 ? 'row-even' : 'row-odd'}`}
                            onClick={() => handleRowClick(user.id)}
                        >
                            {/* USER */}
                            <td className="ps-4">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="avatar">
                                        {getInitials(user.name)}
                                    </div>

                                    <div>
                                        <div className="fw-semibold text-light">{user.name}</div>
                                        <div className="text-secondary small">@{user.username}</div>
                                    </div>
                                </div>
                            </td>

                            <td className="text-light">{user.email}</td>
                            <td className="text-light">{user.phone}</td>

                            <td>
                                <a
                                    href={`https://${user.website}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-info text-decoration-none"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {user.website}
                                </a>
                            </td>

                            {/* ACTIONS */}
                            <td
                                className="text-end pe-4"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Dropdown align="end">
                                    <Dropdown.Toggle
                                        variant="dark"
                                        size="sm"
                                        className="border-0 shadow-none"
                                    >
                                        ⋮
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark">
                                        <Dropdown.Item onClick={() => navigate(`/users/${user.id}`)}>
                                            View
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => navigate(`/users/${user.id}/edit`)}>
                                            Edit
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item
                                            className="text-danger"
                                            onClick={() => onDelete(user.id)}
                                        >
                                            Delete
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default UsersTable;