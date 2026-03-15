const initToast = (options = {}) => {
    const { id, title = '', defaultText = '', type = 'primary' } = options;

    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
        document.body.append(container);
    }

    const toastEl = document.createElement('div');
    toastEl.id = id;
    toastEl.className = `toast text-bg-${type}`;
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');

    toastEl.innerHTML = `
        <div class="toast-header">
            <strong class="me-auto">${title}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">${defaultText}</div>
    `;

    container.append(toastEl);

    const toastInstance = new bootstrap.Toast(toastEl);

    return {
        show: (message) => {
            const body = toastEl.querySelector('.toast-body');
            if (body && message) body.textContent = message;
            toastInstance.show();
        }
    };
};

export default initToast;