import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import PropTypes from "prop-types";

const ToastMessage = ({ toasts }) => {
    return (
        <ToastContainer position="top-end" className="p-3">
            {toasts.map(({ id, message, type }) => (
                <Toast key={id} bg={type === "error" ? "danger" : "success"} autohide delay={3000}>
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
            ))}
        </ToastContainer>
    );
};

ToastMessage.propTypes = {
    toasts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            type: PropTypes.oneOf(["success", "error", "info"]),
        })
    ).isRequired,
};

export default ToastMessage;