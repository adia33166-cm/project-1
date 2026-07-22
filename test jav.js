let index = 0;

function moveSlide(step) {
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide");

  index += step;

  if (index < 0) index = slides.length - 3;
  if (index > slides.length - 3) index = 0;

  slider.style.transform = `translateX(-${index * 33.33}%)`;
}

