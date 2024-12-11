let workingDays = ["Mon","Tue","Wed","Thu","Fri"];

for(let i = 0;i < workingDays.length; i++){
    console.log(`i: ${i}`);
    console.log(`day: ${workingDays[i]}`);
}


let numbers = [2,4,5,8];
for(let num of numbers){
    console.log(`num: ${num}`);
}

for(let index in numbers){
    console.log(`index: ${index}`);
}

//print until Wed, without Wed
for(let i = 0;i < workingDays.length; i++){
    if(workingDays[i] == 'Wed')
    break;
    console.log(`i: ${i}`);
    console.log(`day: ${workingDays[i]}`);
    
}

//print all days, except Wed
for(let i = 0;i < workingDays.length; i++){
    console.log("logging..."+i);
    if(workingDays[i] == 'Wed' || workingDays[i] == 'Fri')
    continue;
    console.log(`i: ${i}`);
    console.log(`day: ${workingDays[i]}`);
    
}