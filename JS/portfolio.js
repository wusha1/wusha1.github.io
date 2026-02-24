// CONTACT FORM: open/close 
function openForm() {
    var form = document.getElementById("myForm");
    if (form) {
        form.style.display = "block";
    }
}

function closeForm() {
    var form = document.getElementById("myForm");
    if (form) {
        form.style.display = "none";
    }
}

// SLIDESHOW 
var slideIndex = 1;

// Run slideshow only after the page loads (prevents "not defined" timing issues)
document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
});

// Arrow controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (!slides || slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (var j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";

    if (dots && dots.length >= slideIndex) {
        dots[slideIndex - 1].className += " active";
    }
}

//  CLICK anywhere OUTSIDE TO CLOSE FORM 
document.addEventListener("click", function (event) {
    var clickedCancel = event.target.matches(".cancel");
    var clickedInsideForm = event.target.closest(".form-popup");
    var clickedPopupButton = event.target.closest(".Pop_Up_Button");
    var clickedContactLink = event.target.closest(".contact");

    if (clickedCancel || (!clickedInsideForm && !clickedPopupButton && !clickedContactLink)) {
        closeForm();
    }
}, false);