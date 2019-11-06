
import POKEMON from './data/pokemon/pokemon.js'
import { traerDataPokemon } from './data.js';

const dataModificada = traerDataPokemon(POKEMON) //ARRAY DE objetos con 3 caracteristicas;
const Seccioncard = document.querySelector('#seccion-card');

//console.log(Seccioncard);
let stringTemplate = '';
for(let i = 0; i < dataModificada.length; i++){
    stringTemplate += `
                        <div id='poke${dataModificada[i].identificador}' class='card'>
                            <div class='card-items'> 
                                <h2>${dataModificada[i].nombre}</h2>
                                <img class="verPokemon" src="${dataModificada[i].imagen}"/>
                                <button id="verPokemon_${dataModificada[i].identificador}" class="buttonStyle">Ver</button>
                            </div>
                        </div>   
                        
                    `
}

console.log(stringTemplate);
Seccioncard.innerHTML = stringTemplate;
traerDataPokemon(POKEMON);


//Backtips y es la nueva forma de concatenar cadenas en es6 ${} interpolar variables

