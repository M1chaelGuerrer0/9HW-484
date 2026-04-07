// ==========================
// Part 1: Date Display
// ==========================

// Create a Date object
let today = new Date();

// Get parts of the date
let month = today.getMonth() + 1; // months start at 0
let day = today.getDate();
let year = today.getFullYear();

// Add leading zeros (ex: 03 instead of 3)
if (month < 10) {
  month = "0" + month;
}

if (day < 10) {
  day = "0" + day;
}

// Create final string
let dateString = "Today is " + month + "/" + day + "/" + year;

// Put it on the webpage
document.getElementById("dateOutput").textContent = dateString;

// ==========================
// Part 2: Number Conversion
// ==========================

// Create values
let value1 = "67";
let value2 = "3.14";
let value3 = "abc";
let value4 = "2077";

// Convert values
let conv1 = Number(value1);
let conv2 = Number(value2);
let conv3 = Number(value3);
let conv4 = Number(value4);

// Build output string
let output = "";

// Value 1
output += "Original: '" + value1 + "' -> Converted: " + conv1;
output += " -> isNaN: " + Number.isNaN(conv1);
output += " -> isInteger: " + Number.isInteger(conv1) + "<br><br>";

// Value 2
output += "Original: '" + value2 + "' -> Converted: " + conv2;
output += " -> isNaN: " + Number.isNaN(conv2);
output += " -> isInteger: " + Number.isInteger(conv2) + "<br><br>";

// Value 3
output += "Original: '" + value3 + "' -> Converted: " + conv3;
output += " -> isNaN: " + Number.isNaN(conv3);
output += " -> isInteger: " + Number.isInteger(conv3) + "<br><br>";

// Value 4
output += "Original: '" + value4 + "' -> Converted: " + conv4;
output += " -> isNaN: " + Number.isNaN(conv4);
output += " -> isInteger: " + Number.isInteger(conv4) + "<br><br>";

// Display on page
document.getElementById("numberConversionOutput").innerHTML = output;

// ==========================
// Part 3: Math & Formatting (Option C)
// ==========================

// Create a large number
let population = 1234567890;


// Format the number using toLocaleString()
let formattedPopulation = population.toLocaleString();

// Build output
let mathOutput = "";
mathOutput += "Raw number: " + population + "<br><br>";
mathOutput += "Formatted number: " + formattedPopulation + "<br><br>";

// ==========================
// Part 4: Conditionals
// ==========================

// Check if number is greater than 1 billion
if (population > 1000000000) {
  mathOutput += "This is a very large number.<br><br>";
} else {
  mathOutput += "This is not a very large number.<br><br>";
}

// Check if number is an integer
if (Number.isInteger(population)) {
  mathOutput += "The number is an integer.";
} else {
  mathOutput += "The number is not an integer.";
}

// Display on page
document.getElementById("mathOutput").innerHTML = mathOutput;