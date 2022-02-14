/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];
//main example
function getAvrAge(users) {
  let result = 0;
  users.forEach(user => {
    return result += user.age;//sum all ages
  })
  console.log(`The Age Average is: ${(result / users.length).toFixed(0)}`);//divide ages on users amount
}
getAvrAge(users);

//second example
const getUserAverageAge = (users) => {
  let total = (prev, curr) => prev + curr;//sum values
  let sum = users.reduce(total);//reduce values
  return sum / users.length;// divide ages on users amount
}
let avrAge = users.map(user => user.age);//gdet array with ages
console.log(getUserAverageAge(avrAge));//result

//main example
function getUsersNames(users) {
 const newName = users.map(user => user.name);
 console.log(newName);
}
getUsersNames(users);

//second example of code
function getUsNam(users) {
  let isName = '';
  users.forEach((user, i) => {
    isName += `${i+1}: ${user.name}`;
  });
  console.log(`The Names Are: ${isName}`);
}
getUsNam(users);

