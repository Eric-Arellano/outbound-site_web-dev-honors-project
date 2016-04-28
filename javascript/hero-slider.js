// Assign each slide an index
// Create a button for each slider
//
// Create function to move slide
//   - change class of .page--hero by giving appropriate hero--image
//        - must remove previous hero--image class
//        - maybe toggle class on and off?
//   - animate transitions
//     - transition left if chosen slide is < index
//     - transition right if chosen slide is > index
//
// Add timer

document.addEventListener('DOMContentLoaded', function() {

  // ---------------------------------------------------------------------
  // Setup
  // ---------------------------------------------------------------------

  var heroContainer = document.querySelector('.page--hero');
  var slides = document.querySelectorAll('.slider__slide');

  var currentIndex = 0;
  var currentHero = 'hero--alaska';

  // ---------------------------------------------------------------------
  // Move functions
  // ---------------------------------------------------------------------

  function move(newIndex) {

    changeContent(newIndex);
    animateMove(currentIndex, newIndex);

  }


    function changeContent(newIndex) {

      // remove current hero--image
      heroContainer.classList.remove(currentHero);

      // determine new hero--image
      var newHero = '';
      if (newIndex === 0) { newHero = 'hero--alaska'; }
      if (newIndex === 1) { newHero = 'hero--east-coast'; }
      if (newIndex === 2) { newHero = 'hero--eric'; }

      // add new hero--image
      heroContainer.classList.add(newHero);
      currentHero = newHero;

      // change text

    }

    function animateMove(currentIndex, newIndex) {

    }

  // ---------------------------------------------------------------------
  // Create buttons
  // ---------------------------------------------------------------------

  // ---------------------------------------------------------------------
  // Add timer
  // ---------------------------------------------------------------------



});
