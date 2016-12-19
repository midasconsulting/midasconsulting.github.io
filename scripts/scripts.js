sr.reveal('.js-reveal',
{
  distance: '7.5rem',
  scale: 1,
  viewFactor: .1,
  duration: 750,
  opacity: 0
});

$(document).ready(function(){
  $(".js-btn").click(function(){
    $(".js-btn-main").slideToggle();
    $(".js-form").slideToggle();
  });
});
