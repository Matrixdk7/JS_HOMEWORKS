let instances = 1;

const createModal = ({title, id, cssClass}, body, footer) => {
    const wrapper = document.createElement('div');
    wrapper.className = cssClass ? `modal fade ${cssClass}`.trim() : 'modal fade';
    wrapper.tabIndex = -1;
    wrapper.ariaLabelledby = title;
    wrapper.id = `${id}_${instances}`;

    const layout = `<div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel_${instances}">${title}</h1>
                    </div>
                    <div class="modal-body">${body}</div>
                    <div class="modal-footer d-flex justify-content-between">${footer}</div>
                </div>
            </div>`;

    wrapper.innerHTML = layout;

    document.body.appendChild(wrapper);

    const bootstrapModalConfig = {
        keyboard: false,
        backdrop: 'static'
    };

    instances += 1;
    return new bootstrap.Modal(wrapper, bootstrapModalConfig);
};

export default createModal;