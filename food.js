document.addEventListener("DOMContentLoaded", function(event) {
  var images = document.getElementsByClassName("slideshow-image");
  var index = 0;

  setInterval(function() {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 3000);
});