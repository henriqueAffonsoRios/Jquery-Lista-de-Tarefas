$(document).ready(function() {
  $('form').on('submit',function(e) {
    e.preventDefault();
    const inputAtv = $('#inputAddTarefa').val();

    $(`<li>${inputAtv}</li>`).appendTo('ul');

    $('li').mouseenter(function() {
      $('li').css('cursor', 'pointer');
    })

    $('li').click(function() {
      $(this).toggleClass('strike');
      $(this).css({'-webkit-user-select': 'none', '-moz-user-select': 'none'});
    })

    $('#inputAddTarefa').val('');
  })
})
