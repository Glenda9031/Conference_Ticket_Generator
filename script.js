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
        }
    }
}




