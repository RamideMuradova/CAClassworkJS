//TASK 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let nums = numbers.filter((item, i) => item % 2 == 1);
console.log(nums);
//part 2
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let newNumbers= array.filter((item, i) => item>0 && item <= 10 );
console.log(newNumbers);

//TASK 2

const users = [
    {
      first_name: 'Mike',
      last_name: 'Sheridan'
    },
    {
      first_name: 'Tim',
      last_name: 'Lee'
    },
    {
      first_name: 'John',
      last_name: 'Carte'
    }
  ];
  let userNames= users.map((users,i)=>{
    console.log(i);
    return `${users.first_name} ${users.last_name}`;
  })
  console.log(userNames);

  //TASK 3 PART1
// const persons = [
//     { name: "Akif", age: 25 },
//     { name: "Aysu", age: 32 },
//     { name: "Ali", age: 35 }
// ];
// const firstPerson = persons.find(person =>person.age > 30);
// console.log(firstPerson);
//PART 2
// const firstPerson =persons.find((person,i)=>{
//     console.log(i);
//     return person.age > 30
// });
// console.log(firstPerson);

//TASK 4
// const array1 = [1, 4, 9, 16];
// const map1 = array1.map((a)=> a**2 );
// console.log(map1);

//TASK 5
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2,4));
console.log(animals.slice(2));
console.log(animals.slice(2,3));
console.log(animals.slice(3));
console.log(animals.slice(3));