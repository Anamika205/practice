//first Simply callback
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function callMe() {
    console.log('I am a callback function');
}

greet('Alice', callMe);

//second callback with paramameter
function processUserInput(callback) {
    let name = prompt('Please enter your name.');
    callback(name);
}

function greet(name) {
    console.log('Hello ' + name);
}

processUserInput(greet);



//third asynchronous callback
function fetchData(callback) {
    setTimeout(() => {
        callback('Fetched data');
    }, 2000);
}

function handleData(data) {
    console.log(data);
}

fetchData(handleData);


//fourth event listenercallback

document.getElementById('myButton').addEventListener('click', function() {
    console.log('Button was clicked!');
});

//fifth foreach callback

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});

//sixth map callback
let numarray = [1, 2, 3, 4, 5];
let squares = numarray.map(function(numarray) {
    return numarray * numarray;
});

console.log(squares);


//seventh filter callback

let num = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);

//eighth custom function callback
function calculate(a, b, callback) {
    return callback(a, b);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(calculate(5, 3, add));
console.log(calculate(5, 3, multiply));

//ninth promise callback
function asyncOperation(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Operation complete');
        }, 1000);
    }).then(callback);
}

asyncOperation((message) => {
    console.log(message);
});

//tenth reduce callback
let numval = [1, 2, 3, 4, 5];

let sum = numval.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15



