document.addEventListener("DOMContentLoaded", () => {
    const videoGrid = document.getElementById('video-grid');

    // Example video data (replace with your actual video file names)
    const videos = [
        { title: "Sample Video 1", src: "videos/sample.mp4" },
        { title: "Sample Video 2", src: "videos/sample.mp4" }
    ];

    // Load videos into the grid
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <video controls>
                <source src="${video.src}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <h3>${video.title}</h3>
        `;
        videoGrid.appendChild(videoCard);
    });
});
