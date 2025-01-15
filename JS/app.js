

window.addEventListener("scroll", function () {

    
    var navunder=document.getElementById("navunder");
    const scrollableHeight = document.body.scrollHeight - window.innerHeight;
    
    
    const scrollProgress = (window.scrollY / scrollableHeight) * 99;

    if(scrollProgress >99){
      document.getElementById("topbtn").innerHTML=`<i class="fa-solid fa-arrow-up"></i>`;
    }
    else{
      this.document.getElementById("topbtn").innerHTML=scrollProgress.toFixed(0)+"%";

    }
    navunder.style.width=`${scrollProgress}vw`
    var navbar = document.getElementById("navbar");
    if(this.window.scrollY>200){

        document.getElementById("home").style.transform = "scale(0.950)";
    }
    else{
        document.getElementById("home").style.transform = "scale(1)";

    }
    if (window.scrollY > 400) {
    navbar.classList.add("navfix"); // Add fade-in class
  } else {
    navbar.classList.remove("navfix"); // Remove fade-in class
  }
});


// document.getElementById("tit1").addEventListener("click", () => {
//   const det1 = document.getElementById("det1");

//   // Check current opacity and toggle it
//   if (det1.style.opacity === "1") {
//     det1.style.height="0px"
//     det1.style.opacity = "0";
//     det1.style.pointerEvents = "none"; // Disable interaction when hidden
//   } else {
//     det1.style.height="100px"

//     det1.style.opacity = "1";
//     det1.style.pointerEvents = "auto"; // Enable interaction when visible
//   }
// });