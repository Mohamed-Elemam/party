//*global varibels
//*------------------
let input1 = document.getElementById("exampleFormControlTextarea1");
let span = document.getElementById("span2");

//?############################################################################
//-----------------
// * side nav bar
//-----------------

$(document).ready(function(){
  $("body").css("overflow","hidden");
  $(".lds-spinner").slideUp(1000);
  $("body").css("overflow","auto");
})



//?############################################################################
//-----------------
// * side nav bar
//-----------------
let innerbarWidth = $(".innerbar").innerWidth(); //the innerbar width

$(".sidebar").css("left", -innerbarWidth), 1000; //hiding the innerbar

$(".outterbar").click(function () {             //on click
  if ($(".sidebar").css("left") == "0px") {     
    $(".sidebar").animate({ left: -innerbarWidth }, 1000); //hide the innerbar
    $(".outterbar").animate({ left: 0 }, 1000);   // retutrn the outer back
    
  } else {
    $(".sidebar").animate({ left: 0 }, 1000);
    $(".outterbar").animate({ left: innerbarWidth }, 1000);

  }
});

//?
$(".fa-xmark").click(function () {
  $(".sidebar").animate({ left: -innerbarWidth }, 1000);
  $(".outterbar").animate({ left: 0 }, 1000);
});
//?############################################################################
//-----------------
// * color box
//-----------------
colorbox = $(".colorBox");
colorbox.eq(0).css("backgroundColor", "#d62e33");
colorbox.eq(1).css("backgroundColor", "teal");
colorbox.eq(2).css("backgroundColor", "#888");
colorbox.eq(3).css("backgroundColor", "lightgreen");

colorbox.click(function (eventInfo) {
  let mainColor = $(eventInfo.target).css("backgroundColor");
  $("body").css("--main-color", mainColor);
});

//?############################################################################
//*accordion
//-----------------


$(".singer").click(function(eventInfo){ 
  // $(".singer-desc").slideUp(1000);
  let index = $(".singer").index(eventInfo.target);   
  $(".singer-desc").eq(index).slideToggle(1000);
});






//?############################################################################
//-----------------
//*countdown

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    $(".countdownSec").innerHTML = "EXPIRED";
  }
  $(".countdownSec").html(

    `
    <div class="countainer d-flex justify-content-center align-items-center section3 py-5">
    <div class="countdown my-5  countborder">
    ${days} D
    </div>
    <div class="countdown my-5  countborder">
    ${hours} H
    </div>
    <div class="countdown my-5  countborder">
    ${minutes} M
    </div>
    <div class="countdown my-5  countborder">
    ${seconds} S
    </div>
    </div>
    `
    )
}, 1000);


//?############################################################################

//-----------------
// * textarea letters count event
//-----------------
input1.addEventListener("keyup", function () {
  let count = 100 - input1.value.length;
  console.log(count);
  span.innerHTML = count;
  if (span.innerHTML == 0) {
    span.innerHTML = "No";
  }
});

//?############################################################################
//-----------------
// * back top top button
//-----------------
$(".backtop").click(function () {
  $("body ,html").animate({ scrollTop: 0 }, 500);
});
