function digitsInNumber(input){

    console.log(`input: ${input}`);

   while(input > 0){
       console.log(input%10);
       input = parseInt(input/10);
       console.log(`input: ${input}`);
   }
}

digitsInNumber(243);
digitsInNumber(6476374);