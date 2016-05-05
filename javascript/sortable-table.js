document.addEventListener('DOMContentLoaded', function() {

  // ---------------------------------------------------------------------
  // Set up table
  // ---------------------------------------------------------------------

  // ---------------------------------------------------------------------
  // Sort column
  // ---------------------------------------------------------------------


  // ---------------------------------------------------------------------
  // Compare functions
  // ---------------------------------------------------------------------
  var compare = {

    // alphabetical data uses default compare function

    number: function(a, b) {
      return a - b;
    },

    location: function(a, b) {
      a = a.split(', ')[1];
      b = b.split(', ')[1];

      if (a < b) {
        return - 1;
      }
      else {
        return a > b ? 1: 0;
      }
    },

    obstacles: function(a, b) {
      var REMOVE_PARENTHESES = / \(([^\)]+)\)/i;
      a = a.replace(REMOVE_PARENTHESES, '');
      b = b.replace(REMOVE_PARENTHESES, '');

      if (a < b) {
        return - 1;
      }
      else {
        return a > b ? 1: 0;
      }
    }
  };




  a = 'test (remove), test';
  b = 'one';

  compare.location(a, b);

});
