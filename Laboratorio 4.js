const prompt = require('prompt-sync')({sigint: true});
 
//const name = prompt('What is your name?');

//Prints current value of counter
function view(counter){
return (`\nCount: ${counter}\nAdd(+)/Substract(-)/"q" to quit\n`);
}

// Updates counter value depending on input
function update(msg, counter){
//Adds a unit to the counter value
if (msg === "+"){
return (counter+1);
}
//Subtracts a unit to the counter value
else if (msg === "-"){
return (counter-1);
}

//q to quit
else if (msg === "q"){
    process.exit(0);
    }

//Invalid input, nothing happens to counter value
else{
return counter;
}
}

//Brain function
function app(counter){
while (true){
console.clear();
const currentView = view(counter);
console.log(`\n${currentView}\nWhat will you do?\n`);
const msg = prompt();
counter = update(msg,counter);
}
}

app(0);
