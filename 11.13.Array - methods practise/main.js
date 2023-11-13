//TASK 1

//findFirstNotRepeatedChar adlı bir function yaradın. Bu function göndərdiyiniz string-in ilk təkrarlanmayan
//hərfini qaytarsın. Nəticə =====>> "e"

// function findFirstNotRepeatedChar(string) {
//   let newStr = "";
//   for (let i = 0; i < string.length; i++) {
//     string.indexOf(string[i]) === string.lastIndexOf(string[i])
//       ? (newStr += string[i])
//       : null;
//   }
//   return newStr[0];
// }
// console.log(findFirstNotRepeatedChar("abacddbecz"));

//TASK 2

//charCount adlı function yaradın. Bu function 2 ədəd argument qəbul edir. 2-ci göndərdiyiniz hərf 1-cinin içərisində
//neçə dəfə təkrarlanıbsa onun sayısını göstərin.

// function charCount(str, item) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     str[i] === item && count++;
//   }
//   console.log(count);
// }
// console.log(charCount("w3rescource.com", "c"));
