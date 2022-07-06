showSlides(slideIndex);

if (slides.lenght < 10) {
    total.textContent = `0${slides.length}`;
} else {
    total.textContent = slides.length;
}


function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';

    if (slides.lenght < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }
}

function plussSlides(n) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
    plussSlides(-1);
});

next.addEventListener('click', () => {
    plussSlides(1);
});