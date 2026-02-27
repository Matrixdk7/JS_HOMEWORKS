'use strict';

// Global Variables
const userSelect = document.getElementById('userSelect');
const albumSelect = document.getElementById('albumSelect');
const loadBtn = document.getElementById('loadBtn');
const status = document.getElementById('status');
const photos = document.getElementById('photos');
const loadMoreBtn = document.getElementById('loadMoreBtn');
let allPhotos = [];
let offset = 0;

// Events
document.addEventListener('DOMContentLoaded', () => {
    loadUsers();
})

userSelect.addEventListener('change', () => {
    const userId = userSelect.value;
    if (!userId) return;

    // Clear + block btn
    photos.innerHTML = "";
    albumSelect.disabled = true;
    loadBtn.disabled = true;
    loadMoreBtn.style.display = "none";

    loadAlbums(userId);
})

albumSelect.addEventListener('change', () => {
    if(albumSelect.value){
        loadBtn.disabled = false;
    } else {
        loadBtn.disabled = true;
    }
});

loadBtn.addEventListener('click', () => {
    loadPhotos(albumSelect.value)
});

loadMoreBtn.addEventListener('click', () => {
    loadPhotoCards();
});

// Load Users
const loadUsers = () => {
    status.textContent = "Loading users...";

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP " + response.status);
            }
            return response.json();
        })
        .then(users => {
            userSelect.innerHTML = '<option value="">Select user...</option>';

            // Add users
            users.forEach(user => {
                const option = document.createElement('option');
                option.value = user.id;
                option.textContent = user.name;
                userSelect.appendChild(option);
            });
        })
        .catch(error => {
            status.textContent = "Error: " + error.message;
        })
        .finally(() => {
            status.textContent = "";
        });
}

// Load Albums
const loadAlbums = (userId) => {
    status.textContent = "Loading albums...";

    fetch('https://jsonplaceholder.typicode.com/albums?userId=' + userId)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP " + response.status);
            }
            return response.json();
        })
        .then(albums => {
            albumSelect.innerHTML = '<option value="">Select album...</option>';

            // Add albums
            albums.forEach(album => {
                const option = document.createElement('option');
                option.value = album.id;
                option.textContent = album.title;
                albumSelect.appendChild(option);
            });

            albumSelect.disabled = false;
        })
        .catch(error => {
            status.textContent = "Error: " + error.message;
        })
        .finally(() => {
            status.textContent = "";
        });
}

// Load Photos
const loadPhotos = (albumId) => {
    photos.innerHTML = "";
    status.textContent = "Loading photos...";

    fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId)
        .then(res => {
            if (!res.ok) throw new Error("HTTP " + res.status);
            return res.json();
        })
        .then(data => {
            allPhotos = data;
            offset = 0;

            loadPhotoCards();
        })
        .catch(err => {
            status.textContent = "Error: " + err.message;
        })
        .finally(() => {
            status.textContent = "";
        });
}

// Load Cards
const loadPhotoCards = () => {
    const photoGroup = allPhotos.slice(offset, offset + 12);

    photoGroup.forEach(photo => {
        const card = document.createElement('div');
        card.className = "col-md-3";

        card.innerHTML = `
            <div class="card">
                <img src="https://picsum.photos/150?random=${photo.id}" class="card-img-top" alt="${photo.title}">
                <div class="card-body">
                    <p class="card-text">${photo.title.slice(0, 40)}${photo.title.length > 40 ? "..." : ""}</p>
                    <a href="${photo.url}" target="_blank" class="btn btn-sm btn-primary">Open</a>
                </div>
            </div>
        `;
        photos.appendChild(card);
    });

    offset += 12;

    // Load more btn
    if (offset < allPhotos.length) {
        loadMoreBtn.style.display = "block";
    } else {
        loadMoreBtn.style.display = "none";
    }
}