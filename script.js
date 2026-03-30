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