// from data.js
// var tableData = data;

// # JavaScript Homework - JavaScript and DOM Manipulation

// ### Level 1: Automatic Table and Date Search (Required)
// * Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided (we recommend building your own custom page!).
// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//   * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

// Use D3 to select the element table
var table = d3.select("tbody");

// Loop through an array of objects (data) and build entire table body from scratch

// 1. Iterate through each datum and console.log each datum
// data.forEach(function (datum) {
//   //   console.log(datum);
// });

// // 2. Use D3 to append one table row 'tr' for each
// data.forEach(function (datum) {
//   //   console.log(datum);
//   var row = table.append("tr");
// });

// // 3. use "Object.entereis" to console.log each key value
// data.forEach(function (datum) {
//   //   console.log(datum);
//   var row = table.append("tr");

//   Object.entries(datum).forEach(function ([key, value]) {
//     // console.log(key, value);
//   });
// });

// // 4. Use d3 to append 1 'object key value items aka row'
// data.forEach(function (datum) {
//   //   console.log(datum);
//   var row = table.append("tr");

//   Object.entries(datum).forEach(function ([key, value]) {
//     // console.log(key, value);
//     // Append a cell to the row for each value
//     // in datum
//     var cell = row.append("td");
//   });
// });

//5. Use d3 to update each cell's text with Datum's key Values

function drawTable(input) {
  input.forEach(function (datum) {
    console.log(datum);
    var row = table.append("tr");
    Object.entries(datum).forEach(function ([key, value]) {
      console.log(key, value);
      // Append a Cell to the Row for each Value in Datum
      var cell = row.append("td");
      cell.text(value);
    });
  });
  console.log(input);
}
drawTable(data);

// * Use a date form in your HTML document and
// write JavaScript code that will listen for
// events and search through the `date/time` column
// to find rows that match user input.

// Getting a reference to the BUTTON element on the page with ID #filter-btn
var button = d3.select("#filter-btn");

// Getting a reference to the FORM element on the page with ID #form
var form = d3.select("#form");

// Create EVENT HANDLER for CLICKING BUTTON or pressing ENTER
button.on("click", runEnter);
form.on("submit", runEnter);

// Create Function to run Event Handler
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  //get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(data);

  var filterData = data.filter((datum) => datum.datetime === inputValue);
  console.log(filterData);

  table.html("");

  drawTable(filterData);
}
