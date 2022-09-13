// Landing Pages HP, LotR, P, ST, X-F
$(document).ready(function() {
  $(window).on('scroll', function() {
   if($(window).scrollTop() < 1000) {
     $('.adventurer').css('background-size', 130 + parseInt($(window).scrollTop() / 5) + '%');
     $('.adventurer h1').css('top', 50 + ($(window).scrollTop() * .1) + '%');
     $('.adventurer h1').css('opacity', 1 - ($(window).scrollTop() * .003));
   }
 });
});
