function initUIHandlers({ profileModel, firstNameInput, lastNameInput, emailInput, errorsBlock }) {

    const saveBtn = document.getElementById('saveBtn');
    const freezeBtn = document.getElementById('freezeBtn');
    const showDescriptorsBtn = document.getElementById('showDescriptorsBtn');
    const descriptorsOutput = document.getElementById('descriptorsOutput');

    // Save Button
    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Clean Errors
        errorsBlock.textContent = '';
        errorsBlock.classList.add('d-none');
        [firstNameInput, lastNameInput, emailInput].forEach(input => input.classList.remove('invalid'));

        try {
            profileModel.firstName = firstNameInput.value;
            profileModel.lastName  = lastNameInput.value;
            profileModel.email     = emailInput.value;

            // Card
            document.getElementById('previewFullName').textContent = profileModel.fullName;
            document.getElementById('previewEmail').textContent = profileModel.email;
            document.getElementById('previewUpdatedAt').textContent = new Date().toLocaleTimeString();
        } catch (err) {
            errorsBlock.classList.remove('d-none');
            errorsBlock.textContent = err.message;
            const msg = err.message.toLowerCase();
            if (msg.includes('first')) firstNameInput.classList.add('invalid');
            if (msg.includes('last'))  lastNameInput.classList.add('invalid');
            if (msg.includes('email')) emailInput.classList.add('invalid');
        }
    });

    // Freeze Button
    freezeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        Object.freeze(profileModel);
        errorsBlock.classList.remove('d-none');
        errorsBlock.textContent = 'Profile model is now frozen. Changes are not allowed.';
        saveBtn.disabled = true;
        freezeBtn.disabled = true;
    });

    // Show Descriptors
    showDescriptorsBtn.addEventListener('click', () => {
        descriptorsOutput.classList.toggle('d-none');
        descriptorsOutput.textContent = JSON.stringify(
            Object.getOwnPropertyDescriptors(profileModel),
            null, 4
        );
    });
}

export default initUIHandlers;