// todays forcast in kelvin
const kelvin = 0
//todays forcast in celcius based off kelvin
let celsius = kelvin - 273
//todays forcast in fahrenheit based off celsius
let fahrenheit = (celsius * (9 / 5)) + 32
// round fahrenheit
fahrenheit = Math.floor(fahrenheit)
let newton = celsius * (33 / 100)
//newton = Math.floor(newton)



console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
console.log(`The temperature is ${newton} on the Newton Scale`)
