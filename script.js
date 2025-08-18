/* Change title when switching tabs */
window.addEventListener("blur", () =>{
  document.title = "Come back :("
})
window.addEventListener("focus", () =>{
  document.title = "Kayla Tang | Portfolio"
})

/* Navbar */
function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}

/* Image gallery */ 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

/* Switching to project pages */
function redirectToPage(url) {
  window.location.href = url;
}
