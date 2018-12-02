$(function(){
  let input = document.getElementById('input-field');

  function check(e) {
    e.preventDefault();
    let text;
    if ($('#input-field').val() !== '') {
      text = $('#input-field').val();
      display(text);
    } else {
      $('#text').text('Please input your name above');
    }
  }

  function display(text) {
    let name = $('#input-field').val();
      $('#display').empty();
      $('#prompt').remove();
      $('#display').load('first-page.html');
      $('#you').html('Welcome ' + text + '!');
      console.log($('#name'));
  }

  $('#btn').on('click', check)

});