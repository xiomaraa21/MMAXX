document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const pdfViewer = document.getElementById('pdfViewer');
    const closeButton = document.getElementById('closeButton');

    // Mostrar la imagen o el PDF en el modal al hacer clic en el botón
    document.querySelectorAll('.enlargeButton').forEach(button => {
        button.addEventListener('click', function () {
            const imgSrc = this.getAttribute('data-image');
            const pdfSrc = this.getAttribute('data-pdf');

            // Resetar el contenido del modal
            modalImage.style.display = 'none';
            pdfViewer.style.display = 'none';

            if (imgSrc) {
                modalImage.src = imgSrc;
                modalImage.style.display = 'block';
            } else if (pdfSrc) {
                pdfViewer.src = pdfSrc;
                pdfViewer.style.display = 'block';
            }

            modal.style.display = 'flex';
        });
    });

    // Cerrar el modal al hacer clic en el botón de cierre
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Cerrar el modal si se hace clic fuera del contenido
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});






/*flecha*/
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('scrollToTop');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });

    // Smooth scroll to the top
    button.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

/*carrusel*/
$(document).ready(function(){
    $('.slick-carousel').slick({
        // Opciones de configuración del slick carousel
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.video-thumbnail').on('click', function() {
        var videoUrl = $(this).data('video');
        var iframe = '<iframe width="100%" height="315" src="' + videoUrl + '" frameborder="0" allowfullscreen></iframe>';
        $(this).parent().html(iframe + $(this).siblings('.video-text').prop('outerHTML'));
    });
});



