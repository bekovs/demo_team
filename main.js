let pokemons = document.querySelector(".pokemons");

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((data) => data.json())
  .then((res) => {
    res.results.forEach((poke) => {
      let pokemon = document.createElement("div");
      pokemon.classList.add("pokemon");
      pokemon.innerHTML = `<h3>${poke.name}</h3>`;
      pokemons.append(pokemon);

      fetch(poke.url)
        .then((resp) => resp.json())
        .then((result) => {
          let img = document.createElement("img");
          img.setAttribute("src", result.sprites.front_default);
          pokemon.append(img);
        });
    });
  });
