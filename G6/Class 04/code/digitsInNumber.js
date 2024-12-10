function digitsInNumber(input){

    console.log(`input: ${input}`);

    while(input > 0){
        console.log(input%10); //this way we get the remaining part -> the last digit
        input = parseInt(input/10); //this way we get the whole part without the last digit
        console.log(`input: ${input}`);
    }
}

digitsInNumber(243);
digitsInNumber(356412734);