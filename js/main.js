let recorrido = [];
let distancia = 0;
document.addEventListener("DOMContentLoaded", load, false);

function load() {
    let botonCalcular = document.getElementById("botonCalcular");
    botonCalcular.addEventListener("click", calcular, false);
}

//Inicialización de distancias
let hn = new Map();
hn.set('Arad', 366);
hn.set('Craiova', 160);
hn.set('Dobreta', 242);
hn.set('Fagaras', 176);
hn.set('Lugoj', 244);
hn.set('Mehadia', 241);
hn.set('Oradea', 380);
hn.set('Pitesti', 100);
hn.set('Rimnicu Vilcea', 193);
hn.set('Sibiu', 253);
hn.set('Timisoara', 329);
hn.set('Zerind', 374);

//Agregar vecinos
let Arad = ['Sibiu', 'Timisoara', 'Zerind'],
    Craiova = ['Dobreta', 'Pitesti'],
    Dobreta = ['Craiova', 'Mehadia'],
    Fagaras = ['Bucarest', 'Sibiu'],
    Lugoj = ['Mehadia', 'Timisoara'],
    Mehadia = ['Dobreta', 'Lugoj'],
    Oradea = ['Sibiu', 'Zerind'],
    Pitesti = ['Bucarest', 'Rimnicu Vilcea'],
    Rimnicu = ['Pitesti', 'Sibiu'],
    Sibiu = ['Arad', 'Fagaras', 'Oradea', 'Rimnicu Vilcea'],
    Timisoara = ['Arad', 'Lugoj'],
    Zerind = ['Arad', 'Oradea'];

function calcular() {
    let e = document.getElementById("ddlViewBy");
    //Inicio
    let origen = e.options[e.selectedIndex].text;
    inicializar(origen);
    buscarVecinos(origen);
}

function inicializar(origen) {
    recorrido = [origen];
    distancia = hn.get(origen);
    console.clear();
}

function buscarVecinos(origen) {
    switch (origen) {
        case 'Arad':
            obtenerSiguiente(Arad);
            break;
        case 'Craiova':
            obtenerSiguiente(Craiova);
            break;
        case 'Dobreta':
            obtenerSiguiente(Dobreta);
            break;
        case 'Fagaras':
            obtenerSiguiente(Fagaras);
            break;
        case 'Lugoj':
            obtenerSiguiente(Lugoj);
            break;
        case 'Mehadia':
            obtenerSiguiente(Mehadia);
            break;
        case 'Oradea':
            obtenerSiguiente(Oradea);
            break;
        case 'Pitesti':
            obtenerSiguiente(Pitesti);
            break;
        case 'Rimnicu Vilcea':
            obtenerSiguiente(Rimnicu);
            break;
        case 'Sibiu':
            obtenerSiguiente(Sibiu);
            break;
        case 'Timisoara':
            obtenerSiguiente(Timisoara);
            break;
        case 'Zerind':
            obtenerSiguiente(Zerind);
            break;
        default:
            alert('ESTO NO DEBERÍA SUCEDER')
            break;
    }
}

function obtenerSiguiente(ciudad) {
    if (ciudad.indexOf('Bucarest') != -1) {
        recorrido.push('Bucarest');
        console.log(recorrido.join("-"));
        console.log(distancia);
    } else {
        let temp = [];
        for (let i = 0; i < ciudad.length; i++) {
            temp.push(hn.get(ciudad[i]));
        }

        let temp2 = temp.slice();
        temp2.sort();
        distancia += temp2[0];

        let pos = temp.indexOf(temp2[0]);
        let next = ciudad[pos];
        recorrido.push(next);

        buscarVecinos(next);
    }
}