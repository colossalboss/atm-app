$(function(){

  function display(e) {
    e.preventDefault();
    $('#display').empty();
    $('#prompt').remove();
    $('#display').load('first-page.html');
  }

  $('#btn').on('click', function() {
    let inputDiv = document.getElementById('input-field');
    if (inputDiv.innerHTML !== '') {
      display();
    }
  });

});