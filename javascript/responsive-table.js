document.addEventListener('DOMContentLoaded', function() {

  var tableHeaders = document.querySelectorAll('.table--responsive th');
  var tableBody = document.querySelectorAll('.table--responsive tbody');

  // store headers
  var headerText = [];
  for (var index = 0; index < tableHeaders.length; index++) {
    var currentHeader = tableHeaders[index];
    headerText.push(currentHeader.textContent.replace(/\r?\n|\r/, ''));
  }

  // assign headers to td
  for (var indexRow = 0, row; row = tableBody.rows[indexRow]; indexRow++) {
    for (var indexCol = 0, col; col = row.cells[indexCol]; indexCol++) {
      col.setAttribute('data-th', headerText[indexCol]);
    }
  }

});
