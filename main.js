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

// fetch("https://reqres.in/api/users?page=1").then((data) => {
//   data.json().then((res) => {
//     res.data.forEach((item) => {
//       let user = document.createElement('h2');
//       user.innerText = item.first_name;
//       users.append(user);
//     })
//   })
// })

let pokemons = document.querySelector('.pokemons');

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((data) => data.json())
    .then((res) => {
      res.results.forEach(poke => {
        let pokemon = document.createElement('div');
        pokemon.classList.add('pokemon')
        pokemon.innerHTML = `<h3>${poke.name}</h3>`
        pokemons.append(pokemon);

        fetch(poke.url)
            .then((resp) => resp.json())
            .then((result) => {
              let img = document.createElement('img');
              img.setAttribute('src', result.sprites.front_default);
              pokemon.append(img);
            })
      })
    })
