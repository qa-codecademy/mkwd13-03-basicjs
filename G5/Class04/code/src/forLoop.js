for(let counter = 1; counter<=12; counter++){
    console.log(counter);
}

// console.log(`Counter after for loop is ${counter}`);

let workingDays = ["Mon", "Tue","Wed","Thu","Fri"];

for(let i=0; i<workingDays.length; i++){
    console.log(`index: ${i}`);
    console.log(`days: ${workingDays[i]}`);
    // document.write('Days: ' + workingDays[i] + '<br>');
}

let example = ['first','second','third','last'];
for (let j = example.length ;  j> 0; j--) {
	// document.write(example[j-1] + '<br>');
    console.log(example[j-1]);
}

console.log("==== FOR OF =====")
for(let days of workingDays){
    console.log(days);
}