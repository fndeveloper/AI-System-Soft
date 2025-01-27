

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

  if (window.scrollY > 400) {
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
// const inputs = document.querySelector(".phonenum");

// inputs.forEach(input => {
//     window.intlTelInput(input, {
//         initialCountry: "us",
//         separateDialCode: true,
//         utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js", // For formatting
//     });
// });
// COUNTRY CODE