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


// let users = document.querySelector('.users');

// fetch("https://reqres.in/api/users?page=1").then((data) => {
//   data.json().then((res) => {
//     res.data.forEach((item) => {
//       let user = document.createElement('h2');
//       user.innerText = item.first_name;
//       users.append(user);
//     })
//   })
// })

let cart = 'cart';

let asdasd = "dsadsadasdasdas";
let ffff = '123123123'