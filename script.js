/* ==========================================
// 1. Smart Profile & Birth Year Calculator
// ==========================================
console.log("--- Assignment 1: Birth Year Calculator ---");
var userName = prompt("Assignment 1: Apna naam darj karein:");
var currentAgeInput = prompt("Assignment 1: Apni mojooda umar (age) likhein:");
var currentYearInput = prompt("Assignment 1: Mojooda saal (current year) likhein (e.g. 2026):");

var currentAge = parseInt(currentAgeInput);
var currentYear = parseInt(currentYearInput);
var birthYear = currentYear - currentAge;

alert("Hello " + userName + ", aap ka exact birth year " + birthYear + " hai!");
console.log("Hello " + userName + ", your birth year is " + birthYear + "!");


// ==========================================
// 2. Interactive CLI Calculator
// ==========================================
console.log("--- Assignment 3: CLI Calculator ---");
var num1Input = prompt("Assignment 3: Pehla number enter karein:");
var num2Input = prompt("Assignment 3: Doosra number enter karein:");
var operator = prompt("Assignment 3: Mathematical operator select karein (+, -, *, /):");

var num1 = parseFloat(num1Input);
var num2 = parseFloat(num2Input);
var calcResult;

if (operator === "+") {
    calcResult = num1 + num2;
    alert("Result: " + num1 + " + " + num2 + " = " + calcResult);
} else if (operator === "-") {
    calcResult = num1 - num2;
    alert("Result: " + num1 + " - " + num2 + " = " + calcResult);
} else if (operator === "*") {
    calcResult = num1 * num2;
    alert("Result: " + num1 + " * " + num2 + " = " + calcResult);
} else if (operator === "/") {
    if (num2 === 0) {
        alert("Error: Zero se divide nahi kiya ja sakta!");
    } else {
        calcResult = num1 / num2;
        alert("Result: " + num1 + " / " + num2 + " = " + calcResult);
    }
} else {
    alert("Invalid Operator selected!");
}


// ==========================================
// 3. Time-Based Greeting & Schedule Checker
// ==========================================
console.log("--- Assignment 5: Time-Based Greeting ---");
var hourInput = prompt("Assignment 5: Mojooda waqt (24-hour format me, e.g., 14 for 2 PM) enter karein:");
var hour = parseInt(hourInput);

if (hour >= 5 && hour < 12) {
    alert("Good Morning! Subah bakhair.");
} else if (hour >= 12 && hour < 17) {
    alert("Good Afternoon! Dopahar bakhair.");
} else if ((hour >= 17 && hour <= 24) || (hour >= 0 && hour < 5)) {
    alert("Good Evening / Good Night! Raat bakhair.");
} else {
    alert("Invalid hour entered!");
}


// ==========================================
// 4. City Finder & Search Engine (Loop + Flag)
// ==========================================
console.log("--- Assignment 8: City Finder ---");
var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta", "Multan"];
var userCity = prompt("Assignment 8: Kis city ko search karna chahte hain?");

var matchFound = false;

for (var i = 0; i < cities.length; i++) {
    if (cities[i].toLowerCase() === userCity.toLowerCase()) {
        matchFound = true;
        break;
    }
}

if (matchFound) {
    alert("City found! " + userCity + " list me mojood hai.");
    console.log("City found!");
} else {
    alert("City not found! " + userCity + " list me nahi mila.");
    console.log("City not found!");*/
}