$(function() {

  var $pull = $('.primary-nav__pull');
  var $menu = $('.primary-nav__list');
  var $mast = $('.mast');

  var $menuHeight = $menu.height();
  var $mastHeight = $mast.height();

  $pull.on('click', function(event) {
    event.preventDefault();

    $mast.height($mastHeight + $menuHeight).fadeIn(1400);

    $menu.slideToggle();

  });

  // TODO: Add reversion after closing menu

});
