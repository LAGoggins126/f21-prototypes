function Animal(numberOfLegs, numberOfEyes)
{
	this.legs = numberOfLegs;
	this.eyes = numberOfEyes;
}

// (1) Create a new object constructor for a Dog that
//     meets the following criteria
//     - Barks in the console
//     - Breed can be set upon creation
//     - Inherits from the Animal object

function dog(breed){
	function bark(){
		console.log("i am barking");	
	}
	this.breed = breed;
	this.bark = bark;
}

dog.prototype = new Animal(4,2);

// (2) Create a new dog from that object constructor

let realDog = new dog("realDogISwear");

// (3) Console log the dog's number of legs, number of
//     eyes, and breed
console.log(realDog.legs, realDog.eyes, realDog.breed);

// (4) Make the dog bark
realDog.bark();