//TASK 1
// function printFullName(firstName = "Ramide", lastName = "MUradova") {
//   return `I am ${firstName} ${lastName}`;
// }
// console.log(printFullName("Ramide", "Muradova"));

// //TASK 2
// function sum(num1 = 2, num2 = 3) {
//   let sum = num1 + num2;
//   return sum;
// }
// function multiply(num1 = 2, num2 = 3) {
//   let multiply = num1 * num2;
//   return multiply;
// }
// function subtruct(num1 = 2, num2 = 3) {
//   let subtruct = num1 - num2;
//   return subtruct;
// }
// function divide(num1 = 2, num2 = 3) {
//   let divide = num1 / num2;
//   return divide;
// }
// console.log(sum(2, 3));
// console.log(multiply(2, 3));
// console.log(subtruct(2, 3));
// console.log(divide(2, 3));

// //TASK 3
// function calculate(num1, num2, operator) {
//   let result;
//   if (operator === "+") {
//     result = num1 + num2;
//   }else
//   if (operator === "-") {
//     result = num1 -num2;
//   }else
//   if (operator === "*") {
//     result = num1*num2;
//   }else
//   if (operator === "/") {
//     result = num1/num2;
//   }
//   return result;
// }
// console.log(calculate(2,3,"+"));
// console.log(calculate(2,3,"-"));
// console.log(calculate(2,3,"*"));
// console.log(calculate(2,3,"/"));

//TASK 4
// const employees = [
//   { name: "Jamil", salary: 50000, department: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnara", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ];

// function filterEmployees(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].salary > 60000) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// }
// console.log(filterEmployees(employees));

//TASK 5
function reveseString(string) {
  let str = "";
  for (let i = string.length - 1; i >= 0; i--) {
    str += string[i];
  }

  return str;
}
console.log(reveseString(`Ramide`));
