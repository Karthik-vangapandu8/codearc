document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('videoContainer');
    const videoPlayer = document.getElementById('videoPlayer');
    const minimizeButton = document.getElementById('minimizeButton');
    const maximizeButton = document.getElementById('maximizeButton');
    const categoryButtons = document.querySelectorAll('.category-button');
    const categoryTitle = document.getElementById('categoryTitle');
    const materialsList = document.getElementById('materialsList');
    const videoPlaylist = document.getElementById('videoPlaylist');

    const videoData = {
        'Core-python': {
            title: 'Core-python',
            playlistId: 'AIzaSyCnBaxtsPuYEWbt1QcgUN1j8xBZD8UxW5E',
            materials: [
                { name: 'Lecture Notes on Python', url: 'path/to/arrays_note.pdf' },
                { name: 'python Coding Examples', url: 'path/to/arrays_examples.zip' },
                { name: 'python Quiz', url: 'path/to/arrays_quiz.html' }
            ]
        },
        'python-datascience': {
            title: 'python-datascience',
            playlistId: 'YOUR_YOUTUBE_PLAYLIST_ID_2',
            materials: [
                { name: 'Lecture Notes on Python', url: 'path/to/arrays_note.pdf' },
                { name: 'python Coding Examples', url: 'path/to/arrays_examples.zip' },
                { name: 'python Quiz', url: 'path/to/arrays_quiz.html' }
            ]
        },
        'python-machinelearning': {
            title: 'python-machinelearning',
            playlistId: 'YOUR_YOUTUBE_PLAYLIST_ID_3',
            materials: [
                { name: 'Lecture Notes on Python', url: 'path/to/arrays_note.pdf' },
                { name: 'python Coding Examples', url: 'path/to/arrays_examples.zip' },
                { name: 'python Quiz', url: 'path/to/arrays_quiz.html' }
            ]
        }
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
                videoPlayer.src = `https://www.youtube.com/embed?listType=playlist&list=${data.playlistId}`;
                
                // Update video playlist
                fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${data.playlistId}&key=YOUR_YOUTUBE_API_KEY`)
                    .then(response => response.json())
                    .then(response => {
                        videoPlaylist.innerHTML = '';
                        response.items.forEach(item => {
                            const li = document.createElement('li');
                            const a = document.createElement('a');
                            a.href = `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`;
                            a.textContent = item.snippet.title;
                            li.appendChild(a);
                            videoPlaylist.appendChild(li);
                        });
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
