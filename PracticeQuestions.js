
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
function sumWithX(a, b) {
  return a + b + x;
}

console.log(sumWithX(3, 4)); // Output: 13


// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const sumWithX = (a, b) => a + b + x;

console.log(sumWithX(3, 4)); // Output: 13


// 3. Write a function that returns another function. (use arrow functions please)
const createAdder = (x) => {
  return (y) => x + y;
};

const addWithX = createAdder(x);
console.log(addWithX(5)); // Output: 11


// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.


const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2))

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  
  if(Math.ceil(Math.random() * 2) < 2){
    throw new Error("Error was thrown");
  }
  
  return 'success'
}


////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

// Using .map to create an array of objects with user IDs and the amount of favorite foods they have:

const favoriteFoodsCount = userData.map((user) => {
  return {
    id: user.id,
    favoriteFoods: user.favorites.food.length,
  };
});

console.log(favoriteFoodsCount);

// In the code above, we use the .map method on the userData array. For each user object, we create a new 
// object that contains the user's ID (user.id) and the amount of favorite foods they have (user.favorites.food.length). 
// This results in an array of objects where each object represents a user with their ID and the count of their favorite foods.


//// 6. Given the data above, use ".reduce" to make an array of all the names
//// of the people who have pizza as one of their favorite foods.
//// example: ['Peter', 'Mary']

// Using .reduce to create an array of names of people who have pizza as one of their favorite foods:

const pizzaLovers = userData.reduce((names, user) => {
  if (user.favorites.food.includes('pizza')) {
    names.push(user.name);
  }
  return names;
}, []);

console.log(pizzaLovers);

// Here, we use the .reduce method on the userData array. The initial value for the reduction is an empty array 
// ([]). For each user object, we check if their favorite foods (user.favorites.food) include the string 'pizza'. 
// If they do, we push the user's name (user.name) to the accumulator array (names). Finally, 
// the result is an array of names of people who have pizza as one of their favorite foods.

//// 7. Show an an example of a switch statement being used

const dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
    break;
}

console.log(dayName);

// In this example, we use a switch statement to assign a day name to the variable dayName based on the dayOfWeek variable.
// The switch statement evaluates the value of dayOfWeek and matches it to a specific case. In each case, 
// we assign the corresponding day name to dayName. If none of the cases match, the default case is executed, and 
// dayName is set to 'Invalid day'. Finally, we log the value of dayName to the console.



////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////


const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
 };
 const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
 };
  

//// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const user = {
  ...userPersonalData,
  ...userGameData,
};

console.log(user);


//// 9. Make a copy of your new user object but override the birthday to december 31st

const newUser = {
  ...user,
  birthday: 'December 31st',
};

console.log(newUser);
 

//// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const copiedAccomplishments = [...user.accomplishments];

console.log(copiedAccomplishments);


//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
 };



 const { favoriteThings: { food } } = user;

console.log(food);

//// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

const [food1, food2] = food;

console.log(food1, food2);


//// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//// the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];

const {
  name: userName,
  favorites: {
    needs: { food: favoriteFood },
    wants: { things: [favoriteThing, secondfavoriteThing] },
  },
} = userInfo;

console.log(userName, favoriteFood, favoriteThing, secondfavoriteThing);


// 14. use object destructuring to grab the following from the userInfo object: 
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing


const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food:  ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};

var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


module.exports =  fetchData;


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function fetchDataAsync() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync();

