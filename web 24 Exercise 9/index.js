let random = Math.random()
let a = prompt("Enter the First Number")
let c = prompt("Enter the operation")
let b = prompt("Enter the Second Number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}
console.log(random)
if(random>0.1){
    console.log(`The result is ${a} ${c} ${b} `)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}