$(function() {

  var $pull = $('.primary-nav__pull');
  var $menu = $('.primary-nav__list');
  var $mast = $('.mast');

  var $menuHeight = $menu.height();
  var $mastHeight = $mast.height();

  $pull.on('click', function(event) {
    event.preventDefault();

    // // change mast height
    // // TODO: Get these animations to work
    var SHRINK_TO_FIT = 1.7;
    if ($menu.css('display') === 'none') {
      $mast.height($mastHeight + ($menuHeight / SHRINK_TO_FIT)).animate(4000);
    }
    else {
      $mast.height($mastHeight).animate(4000);
    }

    // toggle menu
    $menu.slideToggle();

  });

});
