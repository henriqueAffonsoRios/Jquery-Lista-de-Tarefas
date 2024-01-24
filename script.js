$(document).ready(function() {
  $('form').on('submit',function(e) {
    e.preventDefault();
    const inputAtv = $('#inputAddTarefa').val();

    $('<li>').text(inputAtv).appendTo('ul').addClass('new-task');

    $('#inputAddTarefa').val('');
  });

  $('ul').on('mouseenter','li.new-task',function() {
    $(this).css('cursor', 'pointer');
  });

  $('ul').on('click','li.new-task',function() {
    $(this).toggleClass('strike');
    $(this).css({'-webkit-user-select': 'none', '-moz-user-select': 'none'});
  });
});
