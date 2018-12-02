$(function(){

  function display(e) {
    e.preventDefault();
    $('#display').empty();
    $('#prompt').remove();
    $('#display').load('first-page.html');
  }

  $('#btn').on('click', display);

});