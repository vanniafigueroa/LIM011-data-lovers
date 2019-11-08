/* Manejo de data */

// esta es una función de ejemplo

export const traerDataPokemon = (array) => {
  const newArray = []; 
  for(let i = 0;  i<array.length; i++){
   newArray.push({identificador: array[i].id, nombre: array[i].name, imagen:array[i].img});
  }
  return newArray;
}

export const pokedata = (POKEMON) => {
  POKEMON.sort((a,b) => {
    if (a.name < b.name){
      return -1;  
    } 
    if (a.name > b.name){
      return 1;
    }
    return 0;
  });
  console.log(pokedata);
}

export const pokedata2 = (POKEMON) => {

  POKEMON.reverse((a,b) => {
    if (a.name < b.name){
      return -1;  
    } 
    if (a.name > b.name){
      return 1;
    }
    return 0;
  });
  console.log(pokedata2);
}

