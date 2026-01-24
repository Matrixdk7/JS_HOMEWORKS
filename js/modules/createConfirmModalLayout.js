import createModal from "./modalGenerator.js";

export default function createConfirmModalLayout({ id, title }) {
    const body = `
        <p data-confirm-text></p>
    `;

    const footer = `
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-danger" data-confirm-btn>Confirm</button>
    `;

    return createModal({ id, title }, body, footer);
}
