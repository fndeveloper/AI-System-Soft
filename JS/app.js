

window.addEventListener("scroll", function () {

    
    var navunder=document.getElementById("navunder");
    const scrollableHeight = document.body.scrollHeight - window.innerHeight;
    
    
    const scrollProgress = (window.scrollY / scrollableHeight) * 98;

    if(scrollProgress >95){
      document.getElementById("topbtn").innerHTML=`<i class="fa-solid fa-arrow-up"></i>`;
    }
    else{
      this.document.getElementById("topbtn").innerHTML=scrollProgress.toFixed(0)+"%";

    }
    navunder.style.width=`${scrollProgress}vw`
    var navbar = document.getElementById("navbar");
    var navbar1 = document.getElementById("navbar1");

    if(this.window.scrollY>200){

        document.getElementById("home").style.transform = "scale(0.950)";
    }
    else{
        document.getElementById("home").style.transform = "scale(1)";

    }
    if (window.scrollY > 400) {
    navbar.classList.add("navfix");// Add fade-in class
  } else {
    navbar.classList.remove("navfix"); // Remove fade-in class
  }
});

var contactform=document.getElementById("contact-form")

const cursorPoint = document.getElementById('cursorPoint');
document.addEventListener('mousemove', (event) => {

 
  cursorPoint.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});


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