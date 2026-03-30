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
let value1 = "42";
let value2 = "19.75";
let value3 = "hello";
let value4 = "100";

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
// Part 3: Math & Formatting
// ==========================

// Create numeric values
let price = 20.5;
let shipping = 5;
let taxRate = 0.08;

// Calculations
let subtotal = price + shipping;
let tax = subtotal * taxRate;
let total = subtotal + tax;

// Format numbers
let formattedTax = tax.toFixed(2);
let formattedTotal = total.toFixed(2);

// Build output string
let mathOutput = "";
mathOutput += "Price: $" + price + "<br><br>";
mathOutput += "Shipping: $" + shipping + "<br><br>";
mathOutput += "Subtotal: $" + subtotal + "<br><br>";
mathOutput += "Tax: $" + formattedTax + "<br><br>";
mathOutput += "Total: $" + formattedTotal + "<br><br>";

// Display on page
document.getElementById("mathOutput").innerHTML = mathOutput;

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)