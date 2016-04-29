$(function() {

  var $pull = $('.primary-nav__pull');
  var $menu = $('primary-nav__list');
  var $menuHeight = $menu.height();

  $($pull).on('click', function(event) {
    event.preventDefault();
    $menu.slideToggle();
  });
});
