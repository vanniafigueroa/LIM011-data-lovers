/* Manejo de data */

// esta es una función de ejemplo

export const traerDataPokemon = (array) => {
  const newArray = []; 
  for(let i = 0;  i<array.length; i++){
   newArray.push({identificador: array[i].id, nombre: array[i].name, imagen:array[i].img});
  }
  return newArray;
}

