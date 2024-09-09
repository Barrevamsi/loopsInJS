let month = parseInt(prompt("Enter the month number (1-12):"));

if (month >= 3 && month <= 5) {
  console.log("Season: Spring");
} else if (month >= 6 && month <= 8) {
  console.log("Season: Summer");
} else if (month >= 9 && month <= 11) {
  console.log("Season: Autumn");
} else if (month === 12 || month === 1 || month === 2) {
  console.log("Season: Winter");
} else {
  console.log("Invalid month! Please enter a number between 1 to 12.");
}
