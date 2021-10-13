// Exercise #1
// Create an object to hold information on your favorite recipe.
//It should have properties for *title* (a string), *servings*(a number)
// and *ingredients*(an array of strings)
// On separate lines (one console.log statement for each), log the 
//recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

const myRecipe = function(title, servings, ingredients){
  this.title = title
  this.servings = servings
  this.ingredients = ingredients
  console.log(title)
  console.log(`Serves: ${servings}`)
  console.log('Ingredients:')
  for(let key in ingredients){
    console.log(`${ingredients[key]}`)
  }
}
// myRecipe("Lasana", 2, ['dough', 'salt', 'onions', 'tomate sauce'])


//Exercise #2
// Create an array of objects, where each object describes
// a book and has properties for the *title*(a string), *author*(a string)
// and *alreadyRead* (a boolean indicating if you read it yet)

// Iterate through the array of objects of books. For each book, log the book title and book
// author like so: "1984 by George Orwell"

// Now use an if/else statement to change the output depending on whether you read it
// or not. If you read it, log a string like "You already read "1984" by George Orwell"
// and vice versa


const arrObjects = [
  {
    title: 'Ghost Busters',
    author: 'Author Name Example',
    alreadyRead: true
  },
  {
    title: 'Cam Jansen',
    author: 'Author Name Example 2',
    alreadyRead: false,
  },
  {
    title: 'Burnt Notion',
    author: 'Author Name Example 3',
    alreadyRead: true,
  }
]

console.log("<--------------------------------->")

arrObjects.forEach((book)=>console.log(book.title + " by " + book.author))
console.log("<--------------------------------->")

function itterateThruArrObjects(){
  for(let book of arrObjects){
    if(book.alreadyRead == true){
      console.log("You already read " + book.title + " by " + book.author)
    }
    else{
      console.log("You have not read " + book.title + " by " + book.author)
    }
  }
}
itterateThruArrObjects()


//Exercise #3
//Create your object representing your favorite movie, like so
// const shawshank = {
//   title: 'Shawshank Redemption',
//   director: 'Frank Darabont',
//   actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
//   releaseYear: 1994, 
//   duration: 142
// }
// After you have crreated your movie object, print the title 
// of your movie using dot notation
// Print the director's name
// Print the release year
// Maybe your favorite came with an extended cut, including deleted scenes. 
// Write a statement that increases your movie object's duration by 30 minutes. 
const shawshank = {
  title: 'Shawshank Redemption',
  director: 'Frank Darabont',
  actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
  releaseYear: 1994, 
  duration: 142
}

console.log("<--------------------------------->")
console.log(shawshank.director)
console.log(shawshank.releaseYear)
shawshank.duration = shawshank.duration + 30
console.log(shawshank.duration)


// Exercise #4 
// Using the array provided below, 
// How do you check if an object is an array or not? 
// You are checking if arrayList is an array, assuming it were an object before testing it
// That it is not an object
let arrayList = [1, 2, 3];

console.log("<--------------------------------->")
console.log(Array.isArray(arrayList))
console.log(typeof arrayList)

// Exercise #5
// Write a function countCharacters that, when given a string as an argument,
// returns an object containing counts of the ocurrences of each character in 
// the string
// function countCharacters(){
// 
// }
// countCharacters("hello"); => {"h": 1, "e": 1, "l": 2, "o": 1}

console.log("<--------------------------------->")

function countCharacters(myString){
  let res = 0;
  for (let i = 0; i < myString.length; i++){
    // checking character in string
    if (myString.charAt(i) == c)
    res++;
  }
  return res;
}

console.log(countCharacters("hello"))
//Exercise #6
// Write a function that accepts two objects
// as arguments and 
// *extends* all of the key/value pairs of the second one to the first one
// function extend(obj1, obj2) {
  
// }
// extend({a: 1, c: 3}, {b: 2, c: 4}) => {a: 1, b:2, c:4}

object1 = {
  a: 1,
  b: 2,
  c: 3
};

object2 = {
  c: 4,
  d: 5,
  e: 6
};