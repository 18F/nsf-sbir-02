$(document).foundation()
$('.horizontal .progress-fill span').each(function(){
  var percent = $(this).data( "attr" );
  $(this).parent().css('width', percent);
});
