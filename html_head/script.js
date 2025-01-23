let slideIndex = 1;
showSlides(slideIndex);

// Function to move slides forward or backward
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show specific slide when dot is clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Auto slideshow (optional)
setInterval(() => {
    plusSlides(1);
}, 10000);  // Change slides every 10 seconds
