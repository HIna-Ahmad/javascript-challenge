// from data.js
var tableData = data;

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
data.forEach(function (datum) {
  console.log(datum);
  var row = table.append("tr");
  Object.entries(datum).forEach(function ([key, value]) {
    console.log(key, value);
    // Append a Cell to the Row for each Value in Datum
    var cell = row.append("td");
    cell.text(value);
  });
});

// * Use a date form in your HTML document and
// write JavaScript code that will listen for
// events and search through the `date/time` column
// to find rows that match user input.

// Getting a reference to the BUTTON element on the page with ID #filter-btn
var button = d3.select("#filter-btn");

// Geting a reference to the INPUT element on page with ID #datetime
var inputField = d3.select("#datetime");

//This HANDLER FUNCTION is triggered when the button is clicked
function handleClick() {
  console.log("A button was clicked!");
  // Use d3 to see the object dispatched the event
  console.log(d3.event.target);
}

// Attach an EVENT to the HANDLER FUNCTION by using the 'on' function in d3
button.on("click", handleClick);

//Define CLICK HANDLER INLINE
button.on("click", function () {
  console.log("Hi, a button was clicked!");
  console.log(d3.event.target);
});

// Input fields can trigger a change event when new text is entered
inputField.on("change", function () {
  var newText = d3.event.target.value;
  console.log(newText);
});

// var text in tdbody and class and out put tbody
var text = d3.select("#text");
var output = d3.select(".output");

// REVERSE A STRING Function
function reverseString(str) {
  return str.split("").reverse().join("");
}

// HANDLE INPUT CHANGE Function
function handleChange(event) {
  // Grabbing INPUTFIELD Value
  var inputField = d2.event.target.value;

  // REVERSE the INPUT String
  var reversedInput = reverseString(inputText);

  // Set the OUTPUT TEXT to the Reversed input string
  output.text(reversedInput);
}
text.on("change", handleChange);

/// Level 2: Multiple Search Categories (Optional)
// * Complete all of Level 1 criteria.

// * Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

//   1. `date/time`
//   2. `city`
//   3. `state`
//   4. `country`
//   5. `shape`

// - - -

// ### Dataset

// * [UFO Sightings Data](StarterCode/static/js/data.js)

// - - -

// **Good luck!**
