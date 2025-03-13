let image = document.querySelector(".troca-exchange");

function exchangeImage() {
  if (image.style.opacity == 0) {
    image.style.opacity = 1;
  } else {
    image.style.opacity = 0;
  }
}

setInterval(exchangeImage, 3000);
