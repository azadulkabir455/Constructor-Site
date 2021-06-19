let slideIndex = 1;
slideShow(slideIndex);

function plusSlide(n) {
    slideShow(slideIndex += n);
}

function currentSlide(n) {
    slideShow(slideIndex = n);
}

function slideShow(n) {
    let i, slides, dots;

    slides = document.querySelectorAll(".mySlides");
    dots = document.querySelectorAll(".dot");

    if(n > slides.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}