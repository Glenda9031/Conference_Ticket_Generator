const container = document.getElementById('container-input-file');
const inputFile = document.getElementById('avatar');
const iconUpload = document.getElementById('icon-upload');
const divInfo = document.getElementById('file-information');
const submit = document.querySelector('input[type="submit"]');
const containerButtons = document.getElementById('container-buttons');
let fileIsValid = false;

window.addEventListener('DOMContentLoaded', () => {
    const savedImageUrl = localStorage.getItem('imageUrl');
    if (savedImageUrl) {
        const img = document.createElement('img');
        img.src = savedImageUrl;
        img.classList.add('preview');

        iconUpload.style.display = 'none';

        container.appendChild(img);
        fileIsValid = true;
    } else {
        fileIsValid = false;
    }
    updateUIBasedOnFile();
});

function updateUIBasedOnFile() {
    const placeholder = document.getElementById('file-placeholder');

    if (fileIsValid) {
        placeholder.style.display = 'none';
        containerButtons.style.display = 'flex';
    } else {
        placeholder.style.display = 'none';
        containerButtons.style.display = 'flex';
    }
}

container.addEventListener('click', () => inputFile.click());

container.addEventListener('dragover', (event) => {
    event.preventDefault();
    container.classList.add('dragover');
});

container.addEventListener('dragleave', () => {
    container.classList.remove('dragover');
});

container.addEventListener('drop', (event) => {
    event.preventDefault();
    container.classList.remove('dragover');

    const transfer = event.dataTransfer;
        if (FileSystem.length > 0) {
            const file = files[0];
            handleFile(file);
            updateUIBasedOnFile();
        }
});

inputFile.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        handleFile(file);
        updateUIBasedOnFile();
    }
});

function handleFile() {
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function (e) {
            iconUpload.style.display = 'none';

            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('preview');

            const existingPreview = container.querySelector('img.preview');
            if (existingPreview) {
                existingPreview.remove();
            }

            container.appendChild(img);
            fileIsValid = true;

            divInfo.classList.remove('errorMessage');

            localStorage.setItem('imageUrl', e.target.result);
            updateUIBasedOnFile();
        };
        reader.readAsDataURL(file);
    } else {
        fileIsValid = false;
        alert("Please upload a valid image file");
    }
}

function removeImage() {
    const existingPreview = container.querySelector('img.preview');
    if (existingPreview) {
        existingPreview.remove();
    }
    iconUpload.style.display = 'flex';

    fileIsValid = false;

    inputFile.value = '';
    
    localStorage.removeItem("imageUrl");
}

const btnRemove = document.getElementById('remove-image');
btnRemove.addEventListener('click', (event) => {
    event.stopPropagation();
    removeImage();
    updateUIBasedOnFile();
});

function emailValidate(event) {
    const inputEmail = document.getElementById('email');
    const email = inputEmail.value.trim();
    const errorEmail = document.getElementById('errorEmail');
    let emailIsValid = true;

    if (!email.includes('@') || !email.includes('.com')) {
        inputEmail.classList.add('errorInput');
        errorEmail.hidden = false;
        errorEmail.classList.add('errorMessage');
        emailIsValid = false;
    } else {
        inputEmail.classList.remove('errorInput');
        errorEmail.hidden = true;
        errorEmail.classList.remove('errorMessage');
        emailIsValid = true;
    }
    if (!emailIsValid) {
        event.preventDefault();
    }
}

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('fullName') || 'Guest';
    const email = params.get('email') || 'No email provided';
    return { name, email };
}

const ticketName = document.getElementById('ticket-name');
const ticketEmail = document.getElementById('ticket-email');

submit.addEventListener('click', function (event) {
    emailValidate(event);

    if (!fileIsValid) {
        divInfo.classList.add("errorMessage");
        event.preventDefault();
    }
});

/* userInput Section */
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('fullName') || 'Guest';
    const email = params.get('email') || 'No email provided';
    const userGithub = params.get('github') || 'No github provided';
    return { name, email, userGithub };

    const ticketName = document.getElementById('ticket-name');
    const ticketEmail = document.getElementById('ticket-email');
    const ticketGithub = document.getElementById('user-profile');
    const nameProfile = document.getElementById('name-profile');

    if (ticketName && ticketEmail) {
        const { name, email, userGithub } = getQueryParams();
        ticketName.innerHTML = `Congrats, <span class="gradient-text">${name}</span><br> Your ticket is ready`;
        ticketEmail.innerHTML = `We emailed your ticket to: <span class="gradient-text">${email}</span> and will send updates in the run up to the event`;

        nameProfile.textContent = `${name}`;

        if (userGithub.includes(@)) {
            userGithub.textContent = `${userGithub}`;
        } else {
            userGithub.textContent = `@${userGithub}`;
        }
    }

    const imageUrl = localStorage.getItem('imageUrl');

    if (imageUrl) {
        const img = document.getElementById('image-profile');
        img.src = imageUrl;
        img.classList.add('preview');
    }

    const ticketNumber = document.getElementById('ticket-number');
    let n1 = Math.floor(Math.random() * 10);
    let n2 = Math.floor(Math.random() * 10);
    let n3 = Math.floor(Math.random() * 10);
    let n4 = Math.floor(Math.random() * 10);
    let n5 = Math.floor(Math.random() * 10);
    ticketNumber.textContent = `#${n1}${n2}${n3}${n4}${n5}`;
}
