
$(document).ready(function(){
  

  $(document).on('click', '.close', function(){
    $('.slider-wrapper').addClass('hide');
  });

  $(document).on('click', '.box span', function(){
    $('.slider-wrapper').removeClass('hide');
    var image = $(this).find('img').attr('src');
    $('.imageWrapper').attr('src', image);
    
  })
})

function play() {
  document.getElementById("my_audio").play();
}