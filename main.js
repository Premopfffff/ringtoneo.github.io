function searchVideos() {
      var input, filter, videos, i, video;
      input = document.getElementById("searchInput");
      filter = input.value.toUpperCase();
      videos = document.getElementsByTagName("video");

      for (i = 0; i < videos.length; i++) {
        video = videos[i];
        if (video.id.toUpperCase().indexOf(filter) > -1) {
          video.style.display = "";
        } else {
          video.style.display = "none";
        }
      }
    }

    function showAbout() {
  var paragraphs = document.getElementsByClassName("x");
  var videos = document.getElementsByTagName("video");

  for (var i = 0; i < videos.length; i++) {
    videos[i].style.display = "none";
  }

  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.display = "block";
  }
}

const songsLink = document.querySelector('nav ul li a[href="#ef"]');
const contentToRemove = document.querySelector('nav').parentNode;

songsLink.addEventListener('click', (event) => {
  event.preventDefault();
  contentToRemove.removeChild(document.querySelector('nav'));
  contentToRemove.removeChild(document.getElementById('hf'));

  var paragraphs = document.getElementsByClassName("x");
  var videos = document.getElementsByTagName("video");

  for (var i = 0; i < videos.length; i++) {
    videos[i].style.display = "";
  }

  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.display = "none";
  }
});












  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.addEventListener('play', () => {
      // Pause all other videos
      videos.forEach(otherVideo => {
        if (otherVideo !== video) {
          otherVideo.pause();
        }
      });
    });
  });

