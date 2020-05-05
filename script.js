$(document).ready(function () {
   $("body").addClass("animated fadeInLeft");
});

$("#pro-request").click(function () {
   $("#email-submit").html("Email professional request");
});

$("#per-request").click(function () {
   $("#email-submit").html("Email personal request");
});

$("#Email-request").keypress(function () {
   $("#email-submit").removeAttr("disabled");
});

$("#pro-request").click(function () {
   $("customRadio").css("color", "green");
});

/* toggle checkbox color */
$("#robot-check").change(function () {
   $("#robot-check").toggleClass("is-invalid");
});

/*Make both checkbox and textbox required to sumbit*/

$("#email-submit").click(function () {
   window.open(
      "mailto:tyacoolidge@gmail.com" +
         "?subject=" +
         "Hello Tyler" +
         "&body=" +
         $("#Email-request").val()
   );
});

/*toggle text and icon by clicking either text or icon*/
$(".carls-jr").click(function () {
   $("#text1").toggle();
   $(".lock").toggle();
   $(".unlock").toggle();
});

$(".lock, .unlock").click(function () {
   $("#text1").toggle();
   $(".lock").toggle();
   $(".unlock").toggle();
});

$(".direct-response").click(function () {
   $("#text2").toggle();
   $(".lock2").toggle();
   $(".unlock2").toggle();
});

$(".lock2, .unlock2").click(function () {
   $("#text2").toggle();
   $(".lock2").toggle();
   $(".unlock2").toggle();
});

$(".coin-cloud").click(function () {
   $("#text3").toggle();
   $(".lock3").toggle();
   $(".unlock3").toggle();
});

$(".lock3, .unlock3").click(function () {
   $("#text3").toggle();
   $(".lock3").toggle();
   $(".unlock3").toggle();
});
