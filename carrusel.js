document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');
    const prevCursor = document.querySelector('.cursor.prev');
    const nextCursor = document.querySelector('.cursor.next');
    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth;
    let autoSlideInterval;
  
    function updateSlider() {
      slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
  
    function showNextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }
  
    function showPrevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    }
  
    prevCursor.addEventListener('click', function() {
      showPrevSlide();
      resetAutoSlide();
    });
  
    nextCursor.addEventListener('click', function() {
      showNextSlide();
      resetAutoSlide();
    });
  
    function startAutoSlide() {
      autoSlideInterval = setInterval(showNextSlide, 3000); // Cambia cada 3 segundos
    }
  
    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }
  
    // Inicializa el slider
    startAutoSlide();
  
    // Maneja el cambio de tamaño de la ventana para ajustar el ancho del slide
    window.addEventListener('resize', function() {
      const newSlideWidth = slides[0].offsetWidth;
      slider.style.transform = `translateX(-${newSlideWidth * currentIndex}px)`;
    });
  });
