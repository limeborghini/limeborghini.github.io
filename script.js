/* Change title when switching tabs */
window.addEventListener("blur", () => {
  document.title = "Come back :(";
});

window.addEventListener("focus", () => {
  document.title = "Kayla Tang | Portfolio";
});

/* Navbar */
function myFunction() {
  const nav = document.getElementById("topnav");
  nav.classList.toggle("responsive");
}

/* Image slideshow — only runs on pages that have one */
const slides = document.getElementsByClassName("mySlides");

if (slides.length > 0) {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (const slide of slides) {
      slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }
}
