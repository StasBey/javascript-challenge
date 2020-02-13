// from data.js
var tableData = data;

// Refs to the table, input fields and the button
var tbody = document.querySelector("tbody");
var date = document.querySelector("#datetime");
var state = document.querySelector("#state");
var city = document.querySelector("#city");
var country = document.querySelector("#country");
var shape = document.querySelector("#shape");
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
  var enteredDate = date.value;
  var enteredState = state.value.trim().toLowerCase();
  var enteredCity = city.value.trim().toLowerCase();
  var enteredCountry = country.value.trim().toLowerCase();
  var enteredShape = shape.value.trim().toLowerCase();

// Filter on date
  var enteredDate= date.value;  
  if (enteredDate != "") {
    tableData = data.filter(function (sighting) {
      var sightingDate = sighting.datetime;
      return sightingDate === enteredDate;
    });
  }
  else { tableData };

// Filter on State
  var enteredState= state.value;
  if (enteredState != "") {
    tableData = data.filter(function (sighting) {
      var sightingState = sighting.state;
      return sightingState === enteredState;
    });
  }
  else { tableData };

  // Filter on city
  var enteredCity= city.value;
  if (enteredCity != "") {
    tableData = data.filter(function (sighting) {
      var sightingCity = sighting.city;
      return sightingCity === enteredCity;
    });
  }
  else { tableData };

  // Filter on country
  var enteredCountry= country.value;
  if (enteredCountry != "") {
    tableData = data.filter(function (sighting) {
      var sightingCountry = sighting.country;
      return sightingCountry === enteredCountry;
    });
  }
  else { tableData };

  // Filter on shape
  var enteredShape= shape.value;
  if (enteredShape != "") {
    tableData = data.filter(function (sighting) {
      var sightingShape = sighting.shape;
      return sightingShape === enteredShape;
    });
  }
  else { tableData };

  renderTable();
}

// Initial table pull
renderTable();