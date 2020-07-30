
var openbar = document.querySelector('#resp-bar');
var closebar = document.querySelector('#closebar')
var respmenu = document.querySelector('#resp-menu');

openbar.addEventListener('click', function(){
  respmenu.style.display = 'flex';
});

closebar.addEventListener('click', function(){
  respmenu.style.display = 'none';
});

/* slideshow */
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);



// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
});


/* Swiper Js */

