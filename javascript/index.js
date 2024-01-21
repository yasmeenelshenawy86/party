/// <reference types="../@types/jquery" />

// Declaration Variables
const leftMenu = document.querySelector('.leftMenu');
const close = document.querySelector('.close');
const singers = document.querySelectorAll('#slider h3');
const textArea = document.getElementById("textArea");
let textLength = document.getElementById("textArea").maxLength;
const max = 100;


$('.close').on('click', function () {
  $(".leftMenu").animate({ width: 0 }, 1000);
  $('.leftMenu a').addClass('d-none')
})

$("#toggleOpen").on('click', function () {
    $(".leftMenu").animate({width:'200px'},1000)
    $('.leftMenu a').removeClass('d-none')
    $('.leftMenu .close').removeClass('d-none')
})

//section Scroll 
$('#home a').on("click", function (e) {
  let anchor= $(this).attr('href')
    let sectionOffset = $(anchor).offset().top;
    $("body,html").animate(
      {
        scrollTop: sectionOffset,
      },
      2000, function () {
          $(".leftMenu").animate({ width: "0px" }, 1000);
          $(".leftMenu a").addClass("d-none");
          $(".leftMenu .close").addClass("d-none");
      });
})

$(function () {
    $("#slider .sliderBox .first").show(1000);
    $("#slider .sliderBox div").not('.first').slideToggle(1000);
})

$("#slider .sliderBox h3").on("click", function (e) {
    const x = e.target;
    $(x).prev("div").slideUp();
    $(x).next("div").slideToggle();
});

// Show Remaining Time
setInterval(function () {
const targetDate = new Date("2024-10-25T17:00:00");
const now = new Date();
const remainingDate = targetDate - now;
const day = Math.floor(remainingDate / (1000 * 60 * 60 * 24));
const hour = Math.floor(
  (remainingDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
const minute = Math.floor((remainingDate % (1000 * 60 * 60)) / (1000 * 60));
const second = Math.floor((remainingDate % (1000 * 60)) / 1000);
  let x = `
    <div class="col-lg-3">
    <div class="showTime p-2 text-center border border-1 border-white fw-bold text-white fs-1">
        <p class="day">Days: ${day}</p>
    </div>
    </div>
    <div class="col-lg-3">
			<div class="showTime p-2 text-center border border-1 border-white fw-bold text-white fs-1">
					<p class="day">Hour: ${hour}</p>
			</div>
    </div>
    <div class="col-lg-3">
			<div class="showTime p-2 text-center border border-1 border-white fw-bold text-white fs-1">
					<p class="day">Minute: ${minute}</p>
			</div>
    </div>
    <div class="col-lg-3">
			<div class="showTime p-2 text-center border border-1 border-white fw-bold text-white fs-1">
					<p class="day">Second: ${second}</p>
			</div>
    </div>
`;
  document.getElementById("countHours").innerHTML = x;
},1000)

// Textarea Event 
	$("textArea").on("input", function () {
    if ($(textLength) <= $(max)) {
      $(textLength--);
    }
    let show = `
		<span class="text-danger fw-bold">${textLength} </span> 
		`;
    document.getElementById("char").innerHTML = show;
  });

// Scroll Arrow
$(window).on("scroll", function () {
  let windowScroll = $(window).scrollTop();
  let homeHeight = $("#home").height();
  if (windowScroll > homeHeight) {
    $("#arrow-top").removeClass("d-none");
  } else {
    $("#arrow-top").addClass("d-none");
  }
});
$('#arrow-top').on('click', function () {
  $('body,html').animate({
    scrollTop: '0'
  }, 1000)
  })



