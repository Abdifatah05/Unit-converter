let input = document.getElementById("input")
let button = document.getElementById("convert-btn")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")
let meterToFeet = 3.281 
let literToGallon = 0.264 
let kilogramToPound = 2.204 

button.addEventListener("click", function(){
    let value = input.value

    length.textContent = `${value} meters = ${(value * meterToFeet).toFixed(3)} feet | ${value} feet = ${(value / meterToFeet).toFixed(3)} meters `
    volume.textContent = `${value} liters = ${(value * literToGallon).toFixed(3)} gallons | ${value} gallons = ${(value / literToGallon).toFixed(3)} liters `
    mass.textContent = `${value} kilogram = ${(value * kilogramToPound).toFixed(3)} pound | ${value} pound = ${(value / kilogramToPound).toFixed(3)} kilogram `
})

