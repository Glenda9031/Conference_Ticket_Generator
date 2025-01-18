const container = document.getElementById('container-input-file');
const inputFile = document.getElementById('avatar');
const iconUpload = document.getElementById('icon-upload');
const divInfo = document.getElementById('file-infomation');
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

container.addEventListener('click'() => inputFile.click());

container.addEventListener('dragover', (event) => {
    event.preventDefault();
    container.classList.add('dragover');
});








