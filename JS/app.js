

window.addEventListener("scroll", function () {
  var navunder = document.getElementById("navunder");
  const scrollableHeight = document.body.scrollHeight - window.innerHeight;
  const scrollProgress = (window.scrollY / scrollableHeight) * 98;
  if (scrollProgress > 95) {
    document.getElementById("topbtn").innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
}
  else {
    this.document.getElementById("topbtn").innerHTML = scrollProgress.toFixed(0) + "%";

  }
  navunder.style.width = `${scrollProgress}vw`
  var navbar = document.getElementById("navbar");
  var navbar1 = document.getElementById("navbar1");
  var iconf = document.querySelectorAll(".btn-red");


  var navlinkd = this.document.querySelectorAll(".nav-item>.nav-link")

  if (window.scrollY > 700) {
    
      navbar.classList.add("navfix");
   iconf.forEach((e) => {
      e.classList.add("icon-fixeds")
    })
    navlinkd.forEach((e) => {
      e.classList.add("nav-sec-col")
    })
  } else {

    iconf.forEach((e) => {
      e.classList.remove("icon-fixeds")
    })
    navbar.classList.remove("navfix");
    navlinkd.forEach((e) => {


      e.classList.remove("nav-sec-col")
    })
  }
});

;


// COUNTRY CODE
const inputs = document.querySelectorAll(".phonenum");

inputs.forEach(input => {
  window.intlTelInput(input, {
    initialCountry: "us",
    separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js", // For formatting
  });
});
// COUNTRY CODE

// ACCORDIAN
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// ACCORDIAN

// MARQUEE START

// MARQUEE END

// SWIPER HOME JS 
const sliderWrapper = document.getElementById('sliderWrapper');
const slides = document.querySelectorAll('.slider-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;


function showSlide(index) {

  if (index >= slides.length) {
    currentIndex = 0; 
  } else if (index < 0) {
    currentIndex = slides.length - 1; 
  } else {
    currentIndex = index;
  }


  sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}


nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1); 
});

prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1); 
});


showSlide(currentIndex);
// SWIPER HOME JS 

// MARQUEE SLIDER START

// MARQUEE SLIDER END