let temp = parseFloat(prompt("Enter the temperature:"));
let unit = prompt("Enter the unit (C for Celsius, F for Fahrenheit):").toUpperCase();

if (unit === "C") {
  let fahrenheit = (temp * 9/5) + 32;
  console.log(`${temp}°C is equal to ${fahrenheit}°F`);
} else if (unit === "F") {
  let celsius = (temp - 32) * 5/9;
  console.log(`${temp}°F is equal to ${celsius}°C`);
} else {
  console.log("Invalid unit! Please enter C for Celsius or F for Fahrenheit.");
}
