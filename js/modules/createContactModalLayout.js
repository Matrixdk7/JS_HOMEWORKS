import createModal from "./modalGenerator.js";

function createContactModalLayout(modalConfig) {
    const body = `<form id="add-contact-form">
                            <div class="mb-3">
                                <label for="fn" class="form-label">Full name</label>
                                <input name="fullName" type="text" class="form-control" id="fn">
                            </div>
                            <div class="mb-3">
                                <label for="pn" class="form-label">Phone number</label>
                                <input name="phone" type="tel" class="form-control" id="pn">
                            </div>
                            <div class="mb-3">
                                <label for="ad" class="form-label">Address</label>
                                <textarea name="address" class="form-control" id="ad" cols="20"></textarea>
                            </div>
                        </form>`;

    const footer = `<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button form="add-contact-form" type="submit" class="btn btn-success">Save</button>`

    return createModal(modalConfig, body, footer);
}

export default createContactModalLayout;