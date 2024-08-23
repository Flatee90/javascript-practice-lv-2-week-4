// INSTRUCTIONS: In this exercise, you'll practice using a for loop to aggregate information from objects within an array.
// The arrays will be provided for you. Your task is to write the code to aggregate information from these arrays and log it to the console.

// EXAMPLE 1:
// const exampleBooks = [];
// exampleBooks.push({ title: 'The Hobbit', author: 'J.R.R. Tolkien' });
// exampleBooks.push({ title: '1984', author: 'George Orwell' });
// exampleBooks.push({ title: 'Moby Dick', author: 'Herman Melville' });

// let bookTitles = '';
// for (let i = 0; i < exampleBooks.length; i++) {
//     bookTitles += exampleBooks[i].title;
//     bookTitles += ', ';
// }
// console.log('Book Titles:', bookTitles);

// EXAMPLE 2:
// const exampleCountries = [];
// exampleCountries.push({ name: 'Japan', population: 126476461 });
// exampleCountries.push({ name: 'Brazil', population: 212559417 });
// exampleCountries.push({ name: 'Germany', population: 83783942 });

// let countryNames = '';
// for (let i = 0; i < exampleCountries.length; i++) {
//     countryNames += exampleCountries[i].name;
//     // Note: to prevent the final comma, you can test for whether it is the last one with a conditional
//     if (i < exampleCountries.length - 1) {
//         countryNames += ', ';
//     }
// }
// console.log('Country Names:', countryNames);


// EXERCISE 1: Aggregating First Names
// INSTRUCTIONS: Use a for loop to aggregate all the `firstName` values into a single string, separated by commas.
// BONUS: don't add a comma to very last item
// Log the resulting string to the console.

const people = [];
people.push({ firstName: 'John', lastName: 'Doe' });
people.push({ firstName: 'Jane', lastName: 'Smith' });
people.push({ firstName: 'Emily', lastName: 'Johnson' });


// TODO: Write your code here to aggregate the first names from the `people` array.


let firstName = '';
for(let i = 0; i < people.length; i++) {
    firstName += people[i].firstName;
    firstName += ', ';
    console.log('first Name:', firstName);
}

// EXERCISE 2: Aggregating Last Names
// INSTRUCTIONS: Use a for loop to aggregate all the `lastName` values into a single string, separated by commas.
// BONUS: don't add a comma to very last item
// Log the resulting string to the console.

const employees = [];
employees.push({ firstName: 'Alice', lastName: 'Brown' });
employees.push({ firstName: 'Bob', lastName: 'White' });
employees.push({ firstName: 'Charlie', lastName: 'Green' });

// TODO: Write your code here to aggregate the last names from the `employees` array.
let lastName = '';
for(let i = 0; i < employees.length; i++) {
    lastName += employees[i].lastName;
    lastName += ', ';
    console.log('last Name:', lastName);
}

// EXERCISE 3: Aggregating Product Names
// INSTRUCTIONS: Use a for loop to aggregate all the `productName` values into a single string, separated by commas.
// Log the resulting string to the console.

const products = [];
products.push({ productName: 'Laptop', price: 1000 });
products.push({ productName: 'Smartphone', price: 800 });
products.push({ productName: 'Tablet', price: 600 });

// TODO: Write your code here to aggregate the product names from the `products` array.
let productName = '';
for(let i = 0; i < products.length; i++) {
    productName += products[i].productName;
    productName += ', ';
    console.log('product Name:', productName);
}

// EXERCISE 4: Aggregating Task Descriptions
// INSTRUCTIONS: Use a for loop to aggregate all the `description` values into a single string, separated by commas.
// Log the resulting string to the console.

const tasks = [];
tasks.push({ mydescription: 'Complete assignment', dueDate: '2024-08-20' });
tasks.push({ mydescription: 'Attend meeting', dueDate: '2024-08-21' });
tasks.push({ mydescription: 'Submit report', dueDate: '2024-08-22' });
let mydescription = '';
for(let i = 0; i < tasks.length; i++) {
    mydescription += tasks[i].mydescription;
    mydescription += ', ';
    console.log('my description:', mydescription);
}



// EXERCISE 5: Aggregating animal sounds
const exampleAnimals = [];
exampleAnimals.push({ species: 'Dog', animalSound: 'Bark' });
exampleAnimals.push({ species: 'Cat', animalSound: 'Meow' });
exampleAnimals.push({ species: 'Cow', animalSound: 'Moo' });

// TODO: Write your code here to aggregate the animal sounds.
let animalSound = '';
for(let i = 0; i < exampleAnimals.length; i++) {
    animalSound += exampleAnimals[i].animalSound;
    animalSound += ', ';
    console.log('animal Sound:', animalSound);
}
console.log('Hello world');

// Great job! You've completed the exercises.
// These exercises should have helped you practice using for loops to aggregate information from objects in arrays.
// Continue to experiment by creating more arrays and aggregating different types of information!
