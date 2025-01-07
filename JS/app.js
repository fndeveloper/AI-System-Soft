

window.addEventListener("scroll", function () {
    var navunder=document.getElementById("navunder");
    const scrollableHeight = document.body.scrollHeight - window.innerHeight;


    const scrollProgress = (window.scrollY / scrollableHeight) * 100;


    
    navunder.style.width=`${scrollProgress}vw`
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 600) {
    navbar.classList.add("navfix"); // Add fade-in class
  } else {
    navbar.classList.remove("navfix"); // Remove fade-in class
  }
});


