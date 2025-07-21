
  const slider = document.getElementById('slider');
  const images = slider.querySelectorAll('img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let current = 0;

  function showImage(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    showImage(current);
  });

  // Soporte táctil
  let startX = 0;

  slider.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    const delta = startX - endX;

    if (delta > 50) {
      current = (current + 1) % images.length;
    } else if (delta < -50) {
      current = (current - 1 + images.length) % images.length;
    }
    showImage(current);
  });

  // Mostrar primera imagen
  showImage(current);
