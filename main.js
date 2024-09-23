// Arrays
// This will be followed by loops

 // Unfortunately, strings and numbers are not enough for most programming purposes.
 //What is needed are  collections of data that can be used efficiently.
 //This is where arrays come in.

 //- Great for storing DataTransfer
 //= Enumberating data, using and index to find them.
 // - Quickly reordering data
 
 //[] - square brackets are used.
 // brackets hold more than one piece of data.

//let friends = ['Moe', 'Curly', 'Larry']
//console.log(friends[0]);
//let firstFriend = [0];
//let lastFriend = [2];
//console.log(lastFriend);
// console.log(friends);

//let  nums = [22, 48, 4, 80];
// note mixing data types in an array is allowed only in Javascript.

// Created an array using bracket notation
let shoeBrands = []
shoeBrands[0] = 'Brooks'
console.log(shoeBrands)
shoeBrands[1] = 'Hoka';
shoeBrands[2] = 'NB';
shoeBrands[10] = 'Adidas'
console.log(shoeBrands);
console.log(shoeBrands.length);

// Create an array of clothing brands
// Create an array of car brands using

clothingBrands = ['Levi', 'Kirkland', 'Adidas']
carBrands = ['Audi','BMW','Chevorlet', 'Dodge', 'Ford','Honda','Isuzu','Jaguar', 'Lincoln', 'Maybach']

// JS Loops
// Allows you to get tasks done repetitively and accurately.

// for loop
// let i = 0, starting point of the loop
//i < 10, condition of which the loop functions
// i++ incrementor

for(let i = 0; i <=10; i++){
console.log(i);
//
}
// Infinite loop - note: can crash your machine.
//for(let i = 0; i<= 10; i-- )
  //  console.log(i);

//return all even numbers from 0-200
// this will check every second number
for(let i = 0;i<=100; i+=2 ) {
console.log (i)
}

//This solution uses modulus.
// if (i % 2 == 0){
//console.log(i);}


// While 

let i = 0;
while(i < 10){
console.log(i);
i++;

}

let milkShakeSpots = ['Five Guys', 'Shake Shake', 'White Castle', 'Cook Out']
for (let i = 0; i<= milkShakeSpots.length; i++){
   // console.log(milkShakeSpots[i]);
    let spot = milkShakeSpots[i];
   console.log(`I like this spot: ${spot}, a lot`);

}