let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

for(let i=0; i < days.length; i++){
    console.log("logging..."+i);
    if(days[i] === "Fri"){
        break;
    }
    console.log(`day[${i}]: ${days[i]}`);
}


console.log("===========================");

for(let j=0; j<days.length; j++){
    console.log("logging..."+j);
    if(days[j] === "Fri" || days[j] === "Sun"){
        continue;
    }

    console.log(`day[${j}]: ${days[j]}`);
}
