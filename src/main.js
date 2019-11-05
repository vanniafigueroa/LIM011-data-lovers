/**
 * import POKEMON from './data/pokemon/pokemon.js'
 
 */
import POKEMON from './data/pokemon/pokemon.js'

//import { example } from './data.js';
import { pintarPokemon } from './data.js';


console.log(POKEMON);

const dibujar = document.getElementById('dibujar');
let pintado = '';
POKEMON.forEach(imprime => {
    pintado +=`
    <div id="poke_${imprime.id}" class ="card">
        <div class="card-items"> 
            <h2 class="namePokemon">${imprime.name}</h2>
            <img class="verPokemon" src = "${imprime.img}"/>
            <button id="verPokemon_${imprime.id}" class="buttonStyle">Ver</button>
        </div>
    </div>
    `;
    dibujar.innerHTML=pintado;
    pintarPokemon(POKEMON);
})

