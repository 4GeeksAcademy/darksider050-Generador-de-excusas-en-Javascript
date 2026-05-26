/* import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
 */
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generador_de_excusas(who, action, what, when){
    ramdomwho = Math.floor(Math.random() * who.length);
    ramdomacction = Math.floor(Math.random() * action.length);
    ramdomwhat = Math.floor(Math.random() * what.length);
    ramdomwhen = Math.floor(Math.random() * when.length);

    return who[ramdomwho] + " " + action[ramdomacction] + " " + what[ramdomwhat] + " " + when[ramdomwhen] + ".";
}


function onLoad(){
    var excuse = document.getElementById('excusa');
    excuse.innerHTML = generador_de_excusas(who, action, what, when);
}
window.onload = onLoad; 