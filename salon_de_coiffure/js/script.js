let slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(nextIndex) {
  const prevIndex = current;
  current = nextIndex;

  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'prev');

    if (i === prevIndex) slide.classList.add('prev');   // slide sortante
    if (i === current) slide.classList.add('active');  // slide entrante
  });
}

function nextSlide() {
  const nextIndex = (current + 1) % slides.length;
  showSlide(nextIndex);
}

setInterval(nextSlide, 5000);
