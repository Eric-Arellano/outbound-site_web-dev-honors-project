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

  // Call this to move to new slide, regardless of current index
  function move(newIndex) {

    changeContent(newIndex);
    animateMove(currentIndex, newIndex);

    // update buttons
    buttonArray[currentIndex].classList.remove('slider__button--active');
    buttonArray[newIndex].classList.add('slider__button--active');

    currentIndex = newIndex;

  }


    function changeContent(newIndex) {

      // remove current hero--image
      heroContainer.classList.remove(currentHero);

      // determine new hero--image
      // TODO: Remove this dependency; should be determining hero--image based
      //        on HTML, not JS hardcoded values
      var newHero = '';
      if (newIndex === 0) { newHero = 'hero--alaska'; }
      if (newIndex === 1) { newHero = 'hero--east-coast'; }
      if (newIndex === 2) { newHero = 'hero--eric'; }

      // add new hero--image
      heroContainer.classList.add(newHero);
      currentHero = newHero;

      // change current slide (text)
      slides[currentIndex].classList.remove('slider--show');
      slides[newIndex].classList.add('slider--show');

    }

    function animateMove(currentIndex, newIndex) {
      //     - transition left if chosen slide is < index
      //     - transition right if chosen slide is > index

    }



  // ---------------------------------------------------------------------
  // Create buttons
  // ---------------------------------------------------------------------

  var buttonArray = [];
  var buttonContainer = document.querySelector('.slider__button-container');

  for (var index = 0; index < slides.length; index++) {

    // create button
    var newButton = document.createElement('button');
    newButton.classList.add('slider__button');

    // check if active
    if (index === currentIndex) {
      newButton.classList.add('slider__button--active');
    }

    // add event listener
    newButton.addEventListener('click', function() {
      move(index);
    }, false);

    // add to container and array
    buttonContainer.appendChild(newButton);
    buttonArray.push(newButton);

  }


});
