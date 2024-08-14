// dsa.js
document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('videoContainer');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    const minimizeButton = document.getElementById('minimizeButton');
    const maximizeButton = document.getElementById('maximizeButton');
    const categoryButtons = document.querySelectorAll('.category-button');
    const categoryTitle = document.getElementById('categoryTitle');
    const materialsList = document.getElementById('materialsList');
    const videoPlaylist = document.getElementById('videoPlaylist');

    const videoData = {
        'arrays': {
            title: 'py-game',
            videos: [
                { src: 'videos/RAM.mp4', title: 'py-game fundamentals ' },
                { src: 'videos/', title: 'advance py-game' },
                { src: 'videos/', title: 'show game using python' },
            ],
            materials: [
                { name: 'Lecture Notes on Python', url: 'path/to/arrays_note.pdf' }
            ]
        },
        'linked-lists': {
            title: 'datascience ',
            videos: [
                { src: 'videos/linkedlists_video1.mp4', title: 'datascience using python' },
                { src: 'videos/linkedlists_video2.mp4', title: 'intro to pandas ' },
                { src: 'videos/linkedlists_video3.mp4', title: 'pandas project-1' },
            ],
            materials: [
                { name: 'Lecture Notes on Datascience', url: 'path/to/linkedlists_note.pdf' },
            ]
        },
        // Add more categories as needed
    };

    minimizeButton.addEventListener('click', function() {
        videoContainer.classList.add('minimized');
        videoContainer.classList.remove('maximized');
        minimizeButton.style.display = 'none';
        maximizeButton.style.display = 'block';
    });

    maximizeButton.addEventListener('click', function() {
        videoContainer.classList.add('maximized');
        videoContainer.classList.remove('minimized');
        maximizeButton.style.display = 'none';
        minimizeButton.style.display = 'block';
    });

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = button.getAttribute('data-category');
            const data = videoData[category];

            if (data) {
                categoryTitle.textContent = data.title;
                videoPlayer.src = data.videos[0].src;
                
                // Update video playlist
                videoPlaylist.innerHTML = '';
                data.videos.forEach(video => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = '#';
                    a.textContent = video.title;
                    a.addEventListener('click', function(event) {
                        event.preventDefault();
                        videoPlayer.src = video.src;
                        videoPlayer.play();
                    });
                    li.appendChild(a);
                    videoPlaylist.appendChild(li);
                });

                // Update materials list
                materialsList.innerHTML = '';
                data.materials.forEach(material => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = material.url;
                    a.textContent = material.name;
                    li.appendChild(a);
                    materialsList.appendChild(li);
                });
            }
        });
    });
});
