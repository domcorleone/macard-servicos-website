
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



