sr.reveal('.js-splash',
{
  distance: '7.5rem',
  scale: 1,
  viewFactor: .1,
  duration: 750,
  opacity: 0
});

$(document).ready(function(){
  $(".js-btn").click(function(){
    $(".js-hides").slideToggle();
    $(".js-hides").toggleClass("is-hidden");
    $(".js-form").slideToggle();
    $(".js-header").toggleClass("is-smaller");
  });
});
