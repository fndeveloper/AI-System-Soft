

window.addEventListener("scroll", function () {
  var navunder = document.getElementById("navunder");
  const scrollableHeight = document.body.scrollHeight - window.innerHeight;
  const scrollProgress = (window.scrollY / scrollableHeight) * 98;
 
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

// document.addEventListener("DOMContentLoaded",()=>{
  

//   document.getElementById("servcie_nav_link").addEventListener("click", () => {
//     var servcie_sub_drop = document.getElementById("servcie_sub_drop");
//     var off_canvas_nav=document.getElementById("off_canvas_nav")
  
//     if (servcie_sub_drop) {
//       off_canvas_nav.innerHTML = servcie_sub_drop.innerHTML;
//     } else {
//       console.log("Dropdown element not found!");
//     }
//     var link = document.getElementById("servcie_nav_link_ai");

   
//   document.getElementById("prev_btn").addEventListener("click",()=>{
//     console.log("r");
    
//    off_canvas_nav.innerHTML=`
//     <li class="nav-item">
//                             <a class="nav-link" aria-current="page" href="index.html">Home</a>
//                             <span class="navhover"></span>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" aria-current="page" href="about.html">About</a>
//                             <span class="navhover"></span>
//                         </li>

//                         <li class="nav-item dropdown">
//                             <a class="nav-link dropdown-toggle servcie_nav_link" id="servcie_nav_link" href="#" role="button"
//                                 data-bs-toggle="dropdown" aria-expanded="false">
//                                 Service
//                             </a>
//                             <span class="navhover"></span>
//                             <ul class="dropdown-menu mx-auto " 
//                             id="servcie_sub_drop"
//                             >
//                             <a href="" id="prev_btn">BACK</a>
//                                  <li class="nav-item dropdown-submenu">
//                                     <a  class="btn nav-link dropdown-toggle d-flex justify-content-between align-items-center"
//                                     href="#" role="button"   data-bs-toggle="dropdown" aria-expanded="false">
//                                     Ai Product Solution
//                                  </a>
                                 

//                                     <ul class="dropdown-menu col-12 w-100  list-unstyled child-dropdown" >
//                                          <li><a class="dropdown-item" href="buoylight.html">buoylight</a></li>
//                                         <li><a class="dropdown-item" href="buoyspot.html">buoyspot</a></li>
//                                         <li><a class="dropdown-item" href="buoyspy.html">buoyspy</a></li>
//                                         <li><a class="dropdown-item" href="callmatics.html">callmatics</a></li>
//                                         <li><a class="dropdown-item" href="plannet_scan.html">plannetscan</a></li>


//                                     </ul>
//                                 </li>
//                                 <li class="nav-item dropdown-submenu">
//                                     <a class=" btn d-flex justify-content-between align-items-center dropdown-toggle nav-link"
//                                         href="#" id="grc_nav_link"  >GRC Services</a>
//                                     <ul class="dropdown-menu  list-unstyled child-dropdown">
//                                         <li><a class="dropdown-item" href="buoylight.html">
//                                                 Governance Framework <br> implementations</a></li>
//                                         <li><a class="dropdown-item" href="ISO_Frameworks_Implementations.html">
//                                                 ISO Frameworks Implementations</a></li>
//                                         <li><a class="dropdown-item" href="Risk_Management_Services.html">Risk
//                                                 Management Services</a></li>

//                                     </ul>
//                                 </li>
//                                 <li class="nav-item dropdown-submenu">
//                                     <a class="dropdown-item btn dropdown-toggle d-flex justify-content-between align-items-center dropdown-toggle nav-link" href="#" role="button"   data-bs-toggle="dropdown" aria-expanded="false">AI
//                                         Driven Web & App Development</a>
//                                     <ul class="dropdown-menu  list-unstyled child-dropdown">
//                                         <li><a class="dropdown-item" href="buoylight.html">
//                                                 Custom Web & App Development</a></li>
//                                         <li><a class="dropdown-item" href="E-commerce_Development.html">
//                                                 E-commerce Development</a></li>
//                                         <li><a class="dropdown-item" href="Cross_Platform_App_Development.html">
//                                                 Cross-Platform App Development</a></li>
//                                         <li><a class="dropdown-item" href="UX_Design_and_Optimization.html">
//                                                 UI/UX Design and Optimization</a></li>

//                                     </ul>
//                                 </li>


//                             </ul>
//                         </li>

// <!--  -->
//                         <!--  -->
//                         <li class="nav-item">
//                             <a class="nav-link" href="portfolio.html">Portfolio</a>
//                             <span class="navhover"></span>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="contact.html">Contact Us</a>
//                             <span class="navhover"></span>
//                         </li>
//                   `
//   })

//   });
  
// })

// document.addEventListener("DOMContentLoaded", () => {

// });


 var swiper = new Swiper(".fn_swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // Responsive for mobile/tablet
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        }
      }
    });
    
    // =============== PRODUCT SWIPER START ===============
new Swiper(".product_swiper", {
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 3 },      // phones portrait
    576: { slidesPerView: 3 },    // phones landscape
    768: { slidesPerView: 3 },    // tablets
    992: { slidesPerView: 3 },    // desktops
  }
});


    // =============== PRODUCT SWIPER END =================


    // ================ HOME SERVICE COLLAPSE START ================
    var collapse_of_home_service=document.querySelectorAll(".collapse_of_home_service")
    var see_les=document.getElementById("see_les");
    if(collapse_of_home_service && see_les){

    collapse_of_home_service.forEach((e)=>{
 
  
      e.addEventListener("shown.bs.collapse",function(){
          see_les.innerHTML=`
          See Less
          `
      })
          e.addEventListener("hidden.bs.collapse",function(){
          see_les.innerHTML=`
          See More
          `
      })
      
    })

   }
    
    // ================ HOME SERVICE COLLAPSE END   ================