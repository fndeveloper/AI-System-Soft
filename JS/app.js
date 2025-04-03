

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
// Get elements
const sliderWrapper = document.getElementById('sliderWrapper');
const slides = document.querySelectorAll('.slider-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (sliderWrapper && slides.length > 0 && prevBtn && nextBtn) {
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
}

// SWIPER HOME JS 

// MARQUEE SLIDER START

// MARQUEE SLIDER 
document.querySelector(".servcie_nav_link") .addEventListener("click",()=>{
document.querySelector(".off_canvas_nav").innerHTML=`
 <li class="dropdown-submenu position-relative">
                            <a class="dropdown-item  d-flex justify-content-between align-items-center dropdown-toggle nav-link" href="Ai-Product-Solution.html">
                                Ai Product Solution
                                <i class="fa-solid fa-chevron-right ms-2"></i>   </a>
                       
                                                            <ul class="dropdown-menu1 list-unstyled child-dropdown">
                                    <li><a class="dropdown-item" href="buoylight.html">buoylight</a></li>
                                    <li><a class="dropdown-item" href="buoyspot.html">buoyspot</a></li>
                                    <li><a class="dropdown-item" href="buoyspy.html">buoyspy</a></li>
                                    <li><a class="dropdown-item" href="callmatics.html">callmatics</a></li>
                                    <li><a class="dropdown-item" href="plannet_scan.html">plannetscan</a></li>

                                    
                                  </ul>
                            </li>
`
})