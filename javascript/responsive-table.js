document.addEventListener('DOMContentLoaded', function() {

  var tableHeaders = document.querySelectorAll('.table--responsive th');
  var tableBody = document.querySelector('.table--responsive tbody');

  // store headers
  var headerText = [];
  for (var index = 0; index < tableHeaders.length; index++) {
    var currentHeader = tableHeaders[index];
    headerText.push(currentHeader.textContent.replace(/\r?\n|\r/, ''));
  }

  console.log(headerText);

  // assign headers to td
  for (var indexRow = 0; indexRow < tableBody.rows.length; indexRow++) {

    console.log(indexRow);
    
    for (var indexCol = 0; indexCol < tableBody.rows[indexRow].cells.length;
      indexCol++) {

      console.log(indexCol);
      var currentCell = tableBody.rows[indexRow].cells[indexCol];
      currentCell.setAttribute('data-th', headerText[indexCol]);
    }
  }

});
