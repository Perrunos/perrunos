
$('.productos-main').on('click', function(e) {
  $('.box-one').css({opacity: 1});

  $('.barf-title').css('color','#383838');

  $('.logo-verde').fadeOut(1000 , function() {
    $('.logo-verde').attr("src", "images/logogris.png");
    $('.logo-verde').fadeIn(1000);
  });



  $('.box-one').css('top','25%');
  $('.box-two').css({opacity: 1});
  $('.box-two').css('top','0%');
  $('.box-three').css({opacity: 1});
  $('.box-three').css('top','13.5%');
  $('.box-four').css({opacity: 1});
  $('.box-four').css('top','4.5%');
  console.log('its working');
});
