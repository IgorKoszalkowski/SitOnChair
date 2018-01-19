
function calc() {

$(".calc li").on("click", function(){
var name = $('<p>');
name.text($(this).data("name"));
var price = $('<p>');
price.text($(this).data("price"));
price.val($(this).data("price"));
$('.fotel span').after(name);
$('.cena span').after(price);

var vall = $('.cena p')
var array =[];

  vall.each(function(){
    array.push($(this).val());
    sum = 0;
    for (var i=0; i<array.length; i++) {
      sum+=parseFloat(array[i]);
    }
    $('.suma span').append($('<p>')).text(sum);
    console.log(array);
    console.log(sum);
  });

});
}

function checkbox() {

$(".chk1 :checkbox").on("click", function(){

 if ($(this).is(':checked')) {
  var name = $('<p>')
name.text($(this).data("name"));
var price = $('<p>');
price.text($(this).data("price"));
price.val($(this).data("price"));
$('.fotel span').append(name);
$('.cena span').append(price);

var vall = $('.cena p');
var array =[];
  vall.each(function(){
  array.push($(this).val());
  sum = 0;
  for (var i=0; i<array.length; i++) {
  sum+=parseFloat(array[i]);
  }
    $('.suma span').append($('<p>')).text(sum);
    });
} else { $('.row-1 p').remove();
$('.suma span').html(null);}


})
}

function remove () {
var max = 4
var x = 1

$('.calc li').on("click", function(e){
  e.preventDefault()
if ( x < max ) {
   $('.row-1 p').append();
  $(this).toggle();
  x++;
  } else {
    $('.row-1 p').remove();
    $('.calc li').show();
    alert("to many items");
    $('.suma span').html("0");
    }
  });
}

$(function(){
calc();
checkbox();
remove();
});
