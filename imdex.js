// document.getElementById("count_el").innerText = 5
// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// let bonusPoints = 50 ;


// function Fifty (){
//     console.log(42);
// }

// Fifty()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// let total = lap1 + lap2 + lap3

// function Tot() {
//     console.log(total);
// }

// Tot()

// let lapsCompleted = 0;

// function Laps(){
//     lapsCompleted= lapsCompleted + 1
// }
// Laps()
// Laps()
// Laps()

// let count = 0

// let countEl = document.getElementById("count-el")


//  function Click(){
//     count = count + 1
//     countEl.innerText = count
   
//  }
 

//  console.log(countEl);

 
// let countEl = document.getElementById("count-el")

// console.log(countEl)

// let count = 0

// function Increment() {
//     count = count + 1
//     countEl.innerText = count
// }

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save(){
    let countStr = count + " - "
saveEl.textContent += countStr
    countEl.textContent = 0;
    count = 0;
}

// let username = "per"
// let message = "You have tree new notifications"

// console.log(message + ", " + username + "!")

// let messageToUser = message + ", " + username + "!";
// console.log(messageToUser);

let name = "Favour"
let greeting = "Hi, my name is"

let myGreeting = greeting +" " + name;


let welcomeEl = document.getElementById("welcome-el")

let fname = "Favour"
let _greeting = "Welcome "

welcomeEl.innerText = fname + " " + _greeting

let reduce = document.getElementById("count-el")
 function _Reduce(){
    count -= 1
    reduce.innerText = count
 }

 welcomeEl.innerText += "👋🏻"

let saveEl = document.getElementById("save-el")


let firstName = "Favour"
let secondName = "Ekeleme "


function Hello(){
    let fullName = firstName + ", " + secondName + "!";
    console.log(fullName);
}

Hello()

let myPoints = 3

function add3Points() {
    myPoints += 3
}

function removePoint(){
    myPoints -= 1
}
add3Points()
removePoint()
console.log(add3Points );