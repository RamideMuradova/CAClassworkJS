// -------------------------------------------- TASK 1 --------------------------------------------

// text dəyişəndə Java sözünün əvəzinə Javascript yazdırın
// ====>> JavaScript is awesome. Java is fun.

// const text = "Java is awesome. Java is fun.";
// let newText = text.replaceAll("Java" ,"JavaScript")
// console.log(newText);

// -------------------------------------------- TASK 2 --------------------------------------------

// function mixUp(a, b) {

// }

// mixUp adlı function yaradın. function 2 parametr qəbul edir. Ən sonda aşağıdakı kimi
// nəticə çıxardın.

// function mixUp(a,b) {
//     return b.slice(0,2) + a.slice(2) + " " + a.slice(0,2) + b.slice(2)
// }

// console.log(mixUp("val", "pur")); //'pul var'
// console.log(mixUp("donce", "gevlet")); //'gence dovlet'

// -------------------------------------------- TASK 3 --------------------------------------------

// function verbing(word) {

// }

// verbing adlı function yaradın. Bu function bir parametr(feil) qəbul edir. Bu feil əgər 3 hərfdən
// kiçikdirsə sözün özün return edin. Əgər sonu "ing" ilə bitirsə sonuna "ly" əlavə edin. Digər
// hallarda sözün sonuna "ing" əlaavə edin.

// function verbing(word) {
//   if (word.length < 3) return word;
//   if (word.slice(-3) === "ing") {
//     return word + "ly";
//   } else {
//     return word + "ing";
//   }
// }

// console.log(verbing('go')); // go
// console.log(verbing('swim')); //swiming
// console.log(verbing('swiming')); //swimingly

// -------------------------------------------- TASK 4 --------------------------------------------

// Sözün palindrom olub olmadığını yoxlayın.

// function isPalindrome(string) {

// }

// isPalindrome("radar");

// function isPalindrome(string) {
//   if (string == string.split("").reverse().join("")) {
//     return console.log("isPalindrome");
//   } else {
//     return console.log("is not palindrome");
//   }
// }
// console.log(isPalindrome("radar"));
