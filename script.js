const images = document.querySelectorAll('.galary');
const nextImageDelay = 3000;

let currentImage = 0;

images[currentImage].style.opacity = '1';

setInterval(nextImage, nextImageDelay);

function nextImage(){

  images[currentImage].style.zIndez = '-2';
  const time = currentImage;

  setTimeout(() => {
     images[time].style.opacity = '0';
  },1000)

  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.opacity = '1';
  images[currentImage].style.zIndez = '-1';
}