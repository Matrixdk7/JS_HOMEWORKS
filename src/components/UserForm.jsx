import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import { Button, Form as BootstrapForm, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import userSchema from "../validation/ValidationSchema.jsx";
import Loader from "./Loader.jsx";
import './userForm.css';

const UserForm = ({ initialValues, onSubmit }) => {

    const SubmitButton = () => {
        const { isSubmitting } = useFormikContext();

        return (
            <Button type="submit" disabled={isSubmitting} variant="primary">
                {isSubmitting ? <Loader size="sm" /> : 'Save User'}
            </Button>
        );
    };

    return (
        <Card className="user-form-card">
            <Formik
                initialValues={initialValues}
                validationSchema={userSchema}
                onSubmit={onSubmit}
            >
                {() => (
                    <Form>
                        {[
                            { label: "Name", name: "name" },
                            { label: "Username", name: "username" },
                            { label: "Email", name: "email", type: "email" },
                            { label: "Phone", name: "phone" },
                            { label: "Website", name: "website" },
                            { label: "City", name: "city" },
                            { label: "Street", name: "street" },
                            { label: "Company Name", name: "companyName" },
                        ].map(field => (
                            <BootstrapForm.Group className="mb-3" key={field.name}>
                                <BootstrapForm.Label>{field.label}</BootstrapForm.Label>

                                <Field
                                    name={field.name}
                                    type={field.type || "text"}
                                    className="form-control bg-secondary text-light border-0 form-field-hover custom-input"
                                />

                                <ErrorMessage
                                    name={field.name}
                                    component="div"
                                    className="text-danger mt-1"
                                />
                            </BootstrapForm.Group>
                        ))}

                        <div className="d-flex justify-content-end">
                            <SubmitButton />
                        </div>
                    </Form>
                )}
            </Formik>
        </Card>
    );
};

UserForm.propTypes = {
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default UserForm;