// TASK 1 //

//Bir dəyişən təyin edin və dəyəri 1 olsun. 1 saniyədən bir consol-da yaratdığınız dəyişənin dəyərini +1 artırın. 4 saniyə 
//sonra intervalı sonlandırın.

// let count = 0;
// let countInterval = setInterval(() => {
//   console.log(++count);

//   if (count === 4) {
//     clearInterval(countInterval);
//   }
// }, 1000);

// TASK 2 //

//HTML-də button və text üçün tag yazın. button-a click ettikdə text-içindəki yazı dəyişsin.

// let changeText = document.querySelector(".change-text");
// let text = document.querySelector(".text");
// console.log(changeText);
// changeText.addEventListener("click",function(){
//    text.style.color = "red";
//     text.style.fontSize = "2rem";
//     text.innerText = "I am not developer"
// });

// TASK 3 //

//HTML-də birdən çox eyni adda class sahib element yaradın. Hər bir elementi loop ilə tək-tək console-a çıxardın. 

// let texts = document.querySelectorAll(".texts");
// console.log(texts);
// texts.forEach(element=>{
//     console.log(element.innerText);
// });

// TASK 4 //

// let str = "developer";
// let i= 1;
// let interval = setInterval(()=>{
//     if (i <= str.length) {
//         str = str.slice(0,i).toLocaleUpperCase()+ str.slice(i);
//         console.log(str);
//         i++;
//     } else {
//         clearInterval(setInterval);
//     }
// },1000);

// TASK 5 //

//HTML-də button yaradın və ona click ettikdə body-nin background color-u dəyişsin.
   
// let colors = ["blue","red","green","blueviolet","dodgerblue","black"];
// let clickHere = document.querySelector(".click-here");
// clickHere.addEventListener("click",function(){
//     document.body.style.background = 
//     colors[Math.floor(Math.random() * colors.length)];
// });
