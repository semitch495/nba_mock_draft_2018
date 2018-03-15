$(document).ready(function(){
      $('.carousel').carousel();
    });

 $('.carousel.carousel-slider').carousel({fullWidth: true});

function sayThanks(){
  event.preventDefault();
  var sign_up = document.querySelector("#sign_up");
  console.log("sign_up", sign_up )
  sign_up.innerHTML = "";
  var h1 = document.createElement("h1");
  h1.id = "Thanks"
  h1.innerText = "Thank You!"
  console.log("h1", h1)
  // h1.style.margin= "0 auto";
  document.querySelector("main").appendChild(h1);

}



function sayThanks2(){
  event.preventDefault();
  var choice = document.querySelector("#choice");
  console.log("choice", choice )
  choice.innerHTML = "";
  var h5 = document.createElement("h5");
  h5.id = "Thanks2"
  h5.innerText = "Thank You!"
  console.log("h5", h5)
  // h1.style.margin= "0 auto";
  document.querySelector("main").appendChild(h5);
}
