document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById('introVideo');
  const homePage = document.getElementById('homePage');
  const videoContainer = document.querySelector('.video-container');

  // Once the video ends, show the homepage content
  video.onended = function() {
    videoContainer.style.display = 'none'; // Hide the video
    homePage.style.display = 'block'; // Show the homepage
  };
});
