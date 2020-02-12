// from data.js
var tableData = data;

// Refs to the table, input fields and the button
var tbody = document.querySelector("tbody");
var date = document.querySelector("#datetime");
var button = document.querySelector("#search");

// Link event listener to the button, call updateTable when clicked
button.addEventListener("click", updateTable);

// Non-filtered data pull
function renderTable() {
  tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    var sighting = tableData[i];
    console.log(sighting)
    var fields = Object.keys(sighting);
    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
        var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = sighting[field];
    }
  }
}

// Filtered data pull
function updateTable() {
  var enteredDate= date.value;  
  if (enteredDate != "") {
    tableData = data.filter(function (sighting) {
      var sightingDate = sighting.datetime;
      return sightingDate === enteredDate;
    });
  }
  else { tableData };

  renderTable();
}

// Initial table pull
renderTable();