/**
 * 2.3 - Mathematics
 * ICS3 - Mr. Brash 🐿️
 * 
 * Make sure to read the README.md (especially if you missed class)
 * Then checkout the YOUR_TASK.md to see the practice plan
 * 
 * Don't forget - these are playgrounds. Once you finish the requested task, feel free to play.
 **/ 

// Get a random number between 0 and 100
let random_number = Math.random() * 100

// Round it to the nearest whole number
random_number = Math.round(random_number)

// Output the result usijng a new way to insert a variable into a string (called a template)
console.log(`I generated the number ${random_number}`)

// ***  Your code goes below  ***

let celsius = 100;
let fahrenheit = 0;
celsius = celsius + 2;
fahrenheit = (celsius * 9/5) + 32
console.log(fahrenheit)

let fahrenheit_2 = 77;
let celsius_2 = (fahrenheit_2 - 32) * 5/9
console.log(celsius_2)

console.log(`${fahrenheit_2} degrees Fahrenheit is ${celsius_2} degrees celsius.`)

let m = (0 - 5)/(6 + 5) 
console.log(m)

let radius = Math.random() *10
let height = Math.random() *10
let volume = Math.round(Math.Pi * radius**2 * height)
console.log(`${volume} is the volume of the cylinder`)





