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
mathOutput += "Subtotal: $" + price + " + $" + shipping + " = $"  + subtotal + "<br><br>";
mathOutput += "Tax: $" + subtotal + " * " + taxRate + " = $" + formattedTax + "<br><br>";
mathOutput += "Total: $" + subtotal + " + $" + formattedTax + " = $" + formattedTotal + "<br><br>";

// ==========================
// Part 4: Conditionals
// ==========================

// Check if total is greater than 25
if (total > 25) {
  mathOutput += "$" + formattedTotal + " > $25. This purchase is expensive.<br><br>";
} else {
  mathOutput += "$" + formattedTotal + " <= $25. This purchase is affordable.<br><br>";
}

// Check if tax is an integer
if (Number.isInteger(tax)) {
  mathOutput += "$" + formattedTax + " is a whole number.";
} else {
  mathOutput += "$" + formattedTax + " is not a whole number.";
}

// Display on page results from Part 3 and Part 4
document.getElementById("mathOutput").innerHTML = mathOutput;
