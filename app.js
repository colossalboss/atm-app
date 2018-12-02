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

  function withdraw(arg) {
    $('#display').empty();
    $('#display').load(arg);
  }

  function complete(url, selector) {
    $(selector).empty();
    return $.get(url, function(result) {
      $(selector).html(result);
    });
  }

  $('#btn').on('click', check);
  $('#display').on('click', '#withdraw', function() {
    withdraw('withdraw.html');
  });
  $('#display').on('click', '.done', function() {
    $.when(complete('withdrawal-complete.html', $('#display')))
    .then(function() {
      console.log('hello!');
      setTimeout(function() {
        $('#display').empty();
        $('#display').append('<div class="select"><h1>Done!</h1><p>Collect your cash</p><i class="fa fa-money" aria-hidden="true"></i></div>');
      }, 1500);
    })
  });

});