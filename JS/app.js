// window.addEventListener("scroll", function() {
//     var navbar = document.getElementById("navbar");
//     var navlink = document.querySelectorAll(".nav-item>.nav-link");
//     var selc=document.querySelector(".selc")
//     var dr=document.querySelector(".dr")
//     if (navbar) {
//         if (window.scrollY > 600) {
//             navbar.classList.add("fixtop");
//             selc.classList.add("selc1e")
//             dr.classList.add("ddd")
//             navlink.forEach((e) => {
//                 e.classList.add("colb"); // Ensure you're adding the correct class
//                 console.log(e);
//             });
//         } else {
//             navbar.classList.remove("fixtop");
//             navlink.forEach((e) => {
//                 e.classList.remove("colb"); // Remove the same class added earlier
//                 console.log(e);
//             });
//         }
//     }
// });

// let count = 0;
// const counterElement = document.getElementById('counter');

// function updateCounter() {
//     counterElement.textContent = count;
//     count++;

//     if (count > 25) {
//         count = 0; // Reset to 0 after reaching 25
//     }
// }

// setInterval(updateCounter, 800);

// var form=document.getElementById("form");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//    var arr=[];
//    for (let index = 0; index < e.target.length; index++) {
//     const element = e.target[index].value;
//     // console.log(element);
//     arr.push(element)
    
//    }
  
//    console.log(arr);
   
    
// })
const apiPrefix = "https://api.vindecoder.eu/3.2";
const apiKey = "a384b599bbe7"; // Your API key
const secretKey = "b20f283f5d"; // Your secret key
const id = "decode";
const vin = "XXXDEF1GH23456789".toUpperCase(); // Convert VIN to uppercase

// Function to calculate the SHA-1 hash
async function sha1(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-1", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
}

// Main function to call the API
async function fetchAPI() {
  try {
    // Generate the control sum (first 10 characters of the SHA-1 hash)
    const hash = await sha1(`${vin}|${id}|${apiKey}|${secretKey}`);
    const controlSum = hash.substr(0, 10);

    // Construct the API URL
    const apiUrl = `${apiPrefix}/${apiKey}/${controlSum}/decode/${vin}.json`;

    // Fetch the API data
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Data:", data); // Log the response
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function
fetchAPI();
