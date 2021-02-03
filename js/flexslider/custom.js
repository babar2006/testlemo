$(function(){

  SyntaxHighlighter.all();

});

$(window).load(function(){

  $('.flexslider').flexslider({

    animation: "slide",
	slideshowSpeed: 8000,

    animationLoop: false,

    itemWidth: 1170,

    itemMargin: 5,

    pausePlay: true,

    start: function(slider){

      $('body').removeClass('loading');

    }

  });

});