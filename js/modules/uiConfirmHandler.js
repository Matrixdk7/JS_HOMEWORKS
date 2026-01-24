import createConfirmModalLayout from "./createConfirmModalLayout.js";

const initConfirmModal = (config) => {
    const modal = createConfirmModalLayout({
        id: 'confirmModal',
        title: config.title ?? 'Confirm'
    });

    document.body.append(modal._element);

    const textEl = modal._element.querySelector('[data-confirm-text]');
    const confirmBtn = modal._element.querySelector('[data-confirm-btn]');

    let confirmHandler = null;

    confirmBtn.addEventListener('click', () => {
        if (typeof confirmHandler === 'function') {
            confirmHandler();
        }
        modal.hide();
    });

    const open = ({ text, onConfirm }) => {
        textEl.textContent = text;
        confirmHandler = onConfirm;
        modal.show();
    };

    return {
        open,
        hide: modal.hide.bind(modal)
    };
};

export default initConfirmModal;