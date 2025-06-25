let currentIndex = 0;
let images = [];

function openLightbox(imgElement) {
  const src = imgElement.src;
  images = Array.from(document.querySelectorAll('.gallery .image img'));
  currentIndex = images.findIndex(img => img.src === src);
  
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function filterImages(category) {
  const allImages = document.querySelectorAll('.gallery .image');
  allImages.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
