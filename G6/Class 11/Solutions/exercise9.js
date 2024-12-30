function Pet(name, type, age, isHealthy, owner){
    //this -> the object we are creating
    this.name = name;
    this.type=type;
    this.age=age;
    this.isHealthy = isHealthy;
    this.owner = owner;
    this.isAdopted = function(){
        // if(owner){
        //     return true;
        // }else{
        //     return false;
        // }

        //return owner //will return the whole owner
       // return !owner //will return boolean negative of the actual value
        return !!owner; //will return boolean, if the owner has value, one ! will return falsy and another ! will return true
                        //will return boolean, if the owner does not have value (ex. null), one ! will return true and another ! will return false
    }
}

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.print = function(){
        console.log(`First name: ${this.firstName}`);
        console.log(`Last name: ${this.lastName}`);
        console.log(`Age: ${this.age}`);
        
    }
}

let pets  = [new Pet("Bonnie", "dog", 3, true, "Ana"), new Pet("Ragi", "cat", 4, true, "Ana"), new Pet("Ardi", "dog", 4, false)];
let people = [new Person("Petko", "Petkovski", 25), new Person("Ana", "Petkovska", 35)];

let myInput = document.getElementById("myInput");
let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(){
    if(!myInput.value)
    {
        console.log("You must enter a value!");
        return;
    }

    let petOwner;
    for(person of people){
        if(person.firstName.toLowerCase() === myInput.value.toLowerCase()){
            petOwner = person;
            break;
        }
    }

    if(!petOwner) // if it is undefined (we haven't found an owner)
    {
        console.log("We haven't found the entered value as owner!");
        return;
    }

    let adoptedPets = [];
    for(let pet of pets){
        console.log(pet.owner);
        console.log(!!pet.owner);
        console.log(petOwner.firstName);
        if(!!pet.owner && pet.owner.toLowerCase() === petOwner.firstName.toLowerCase()){
            adoptedPets.push(pet);
        }
    }
    console.log(adoptedPets);
});
