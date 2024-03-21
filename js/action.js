
//Get the button
let mybutton = document.getElementById("btn-back-to-top");
let rowPhotos = document.querySelector(".row.photos");
// <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="images/galeria/foto (48).jpeg"
//               data-lightbox="photos"><img class="img-fluid" src="images/galeria/foto (48).jpeg"></a></div>
let totalPhotos = 75;
let divClasses = ["col-sm-6", "col-md-4", "col-lg-3", "item"];

for (let count = 1; count < totalPhotos; count++) {

  let div = document.createElement("div");
  let a = document.createElement("a");
  let img = document.createElement("img");

  for (let x = 0; x < divClasses.length; x++) {
    div.classList.add(divClasses[x]);
  }

  a.setAttribute("href", "images/galeria/foto (" + count + ").jpeg");
  a.setAttribute("data-lightbox", "photos");
  img.setAttribute("class", "img-fluid");
  img.setAttribute("src", "images/galeria/foto (" + count + ").jpeg");
  img.setAttribute("alt", "foto (" + count + ")");
  img.setAttribute("loading", "lazy");


  a.appendChild(img);
  div.appendChild(a);
  rowPhotos.appendChild(div);

}

/* get current year code */
document.querySelector("#footer").innerHTML = (new Date()).getFullYear();

/* code below to allow user to go back to the top  
https://github.com/mdbootstrap/bootstrap-back-to-top-button
*/

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* captcha */

// $(document).ready( ()=>{
//   alert("Now I am working as I supposed to!!!");
//   generateCaptcha();
//   // Define the function generateCaptcha()
//   function generateCaptcha() {
//     // Get the canvas element with ID captcha and create an instance of its canvas rendering context
//     var a = $("#captcha")[0],
//         b = a.getContext("2d");
//       // Clear the canvas
//       b.clearRect(0, 0, a.width, a.height);
//       // Define the string of characters that can be included in the captcha
//       var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
//           e = "",
//           g = -45,
//           h = 45,
//           i = h - g,
//           j = 20,
//           k = 30,
//           l = k - j;
//       // Generate each character of the captcha
//       for (var m = 0; m < 6; m++) {
//         // Select random letter from the pool to be part of the captcha
//         var n = f.charAt(Math.floor(Math.random() * f.length));
//         e += n;
        
//         // Set up the text formatting
//         b.font = j + Math.random() * 10 + "px Arial";
//         b.textAlign = "center";
//         b.textBaseline = "middle";
        
//         // Set the color of the text
//         b.fillStyle = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    
//         // Add the character to the canvas
//         var o = g + Math.random() * i;
//         b.translate(20 + m * 30, a.height / 2);
//         b.rotate(o * Math.PI / 180);
//         b.fillText(n, 0, 0);
//         b.rotate(-1 * o * Math.PI / 180);
//         b.translate(-(20 + m * 30), -1 * a.height / 2);
//       }
//       // Set the captcha code in session storage
//       sessionStorage.setItem("captchaCode", e);
//   }
// });

