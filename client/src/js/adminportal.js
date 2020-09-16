$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$(document).ready(function () {
  $('.sec').hide();
  $('#targetdiv1').show();
  $('#selectMe').change(function () {
    $('.sec').hide();
    $('#'+$(this).val()).show();
  })
});