// // TASK 1
// for (index = 0; index < 100; index++) {
//   if (index % 2 === 1) {
//     console.log(`${index} cut ededdir`);
//   }
// }

// TASK 2
for (let i = 10; i < 100; i++) {
  if (i % 10 === 7) {
    console.log(i);
  }
}
// TASK 3
for (let i = 10; i < 100; i++) {
  if (i % 11 === 0) {
    console.log(i);
  }
}
// TASK 4
let a = 50;
for (let i = 0; i <= 50; i++) {
  if (a % i === 0) {
    console.log(i);
  }
}
// TASK 5
let str = `Ramide`;
let strLenght = str.length;
for (let index = 0; index < strLenght; index++) {
  console.log(str[index]);
}
//TASK 6
const n = 6;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(`faktorial:${factorial}`);
