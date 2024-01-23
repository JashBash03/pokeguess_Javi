async function getPkmn(randomPkmn) {
    const url = `https://pokeapi.co/api/v2/pokemon/${randomPkmn}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
}

function randomNumber(max){
    return Math.floor(Math.random() * max) + 1;

}

async function mi_peticion(){
    const pkmn = await getPkmn(randomNumber(1008));
    const name = pkmn.name;
    const img = pkmn.sprites.front_default;

    console.log(name)
    console.log(img)
}

mi_peticion();