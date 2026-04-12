import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Loader from "../Loader.jsx";
import './confirmModal.css';

const ConfirmModal = ({ show, onClose, onConfirm, title, body, deleting }) => {
    return (
        <Modal
            show={show}
            onHide={onClose}
            centered
            dialogClassName="confirm-modal-dialog"
        >
            <Modal.Header closeButton className="confirm-modal-header">
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="confirm-modal-body">{body}</Modal.Body>

            <Modal.Footer className="confirm-modal-footer">
                <Button variant="secondary" onClick={onClose} className="confirm-btn cancel-btn">
                    Cancel
                </Button>
                <Button variant="danger" onClick={onConfirm} disabled={deleting} className="confirm-btn delete-btn">
                    {deleting ? <Loader size="sm" /> : 'Delete'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

ConfirmModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    title: PropTypes.string,
    body: PropTypes.string,
    deleting: PropTypes.bool
};

export default ConfirmModal;