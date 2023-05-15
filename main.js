// Promise может находиться в трех состояниях

// pending начальное состояние, ожидание, не исполнен.
// fulfilled операция завершена успешно
// rejected операция завершена с ошибкой

// const myFirstPromise = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if(a === 3){
//     resolve('Success');
//   } else {
//     reject('Fail');
//   }
// })

// myFirstPromise.then((message) => {
//   console.log("This is in the then " + message)
// })
// .catch((message) => {
//   console.log("This is in the catch " + message)
// })
// .finally(() => {
//   console.log("I am finally, i work in BOTH cases")
// });

//! fetch

// let users = document.querySelector('.users');

let cart = "cart";

let pokemons = document.querySelector(".pokemons");

let asdasd = "dsadsadasdasdas";
