document.addEventListener('DOMContentLoaded', function() {

  // ---------------------------------------------------------------------
  // Set up table
  // ---------------------------------------------------------------------
  var tableHeaders = document.querySelectorAll('.table--sortable th');
  var tableBody = document.querySelector('.table--sortable tbody');
  var rows = $(tableBody).find('tr').toArray();

  // add event listener
  for (var headerIndex = 0; headerIndex < tableHeaders.length; headerIndex++) {
    var header = tableHeaders[headerIndex];
    header.addEventListener('click', sort(header, headerIndex), false);
  }

  // ---------------------------------------------------------------------
  // Sort column
  // ---------------------------------------------------------------------

  function sort(header, headerIndex) {
    if (header.classList.contains('sort--ascending') ||
      header.classList.contains('sort--descending')) {
      reverseOrder(header);
      }
    else {
      sortAscending(header, headerIndex);
    }
  }

  function sortAscending(header) {
    header.classList.add('sort--ascending');

    // remove sorting of siblings
    $(header).siblings().remove('sort--ascending  sort--descending');

    // sort based off of type
    var sortType = $(header).data('sort');
    rows.sort(function(a, b) {
      a = $(a).find('td').eq(headerIndex).text();
      b = $(b).find('td').eq(headerIndex).text();
      return compare[sortType](a, b);
    });

    tableBody.append(rows);
  }

  function reverseOrder(header){
    header.classList.toggle('sort--ascending');
    header.classList.toggle('sort--descending');
    tableBody.append(rows.reverse());
  }

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

});
