
for (let i = 0; i < 10; i++) {
    console.log(i);
}


let workingDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

for (let i = 0; i < workingDays.length; i++) {
    console.log(workingDays[i]);
}

console.log("This week Monday was non working day, so the working days were:");

for (let i = 0; i < workingDays.length; i++) {
    if (workingDays[i] === 'Mon') {
        continue;
    }
    console.log(workingDays[i]);
}

let names = ['Martin', 'Frose', 'Angel', 'Sandra', 'Ana'];

let userInput = prompt("Please search for a name in my list:");

for (let i = 0; i < names.length; i++) {
    if (userInput === names[i]) {
        break;
        // return; instead of break you can also use empty return
    }
    console.log(names[i]);
}




// for-of loop structure
let colors = ['blue', 'orange', 'red', 'green'];

for(let color of colors){
    console.log(color);
}
