import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const FormField = ({ label, name, type, formik }) => {
    const { values, handleChange, handleBlur, touched, errors } = formik;

    return (
        <Form.Group className="mb-3" controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                name={name}
                value={values[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched[name] && !!errors[name]}
            />
            <Form.Control.Feedback type="invalid">
                {errors[name]}
            </Form.Control.Feedback>
        </Form.Group>
    );
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    formik: PropTypes.object.isRequired,
};

FormField.defaultProps = {
    type: "text",
};

export default FormField;