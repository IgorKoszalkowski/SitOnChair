function dropdown() {


$('.arrow').on("click", function(){
  $(this).toggleClass( 'selected' );
  if ($(this).hasClass('selected')) {
      $(this).next().next().show();

  } else {
      $(this).next().next().hide();



  }
});
}

 $(function (){
dropdown()


 });
