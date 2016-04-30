$questions = $('.accordion dt');
$answers = $('.accordion dd');

$questions.on('click', function(event) {
  event.preventDefault();
  $(this)
    .next($questions)
    .not(':animated')
    .slideToggle();
});
