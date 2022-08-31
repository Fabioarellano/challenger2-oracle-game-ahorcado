
let palabraSeleccionada;
let vidas = 3;
let letraDigitada;
//let letra;
let palab="";


const letraPulsada = event => {
    let letraDigitada = event.key.toUpperCase();
   
    //if(letraDigitada.match(/^[a-zñ]$/i) && !usedLetters.includes(letraDigitada)) {
        if(letraDigitada.match(/^[a-zñ]$/i)) {    
    //letterInput(letraDigitada);
        palab = palab + " " + letraDigitada;
        console.log(letraDigitada);
        document.getElementById("colocaletra").innerHTML= palab;
    };
};


const colocarLetra = ()=>{
    //console.log(palabraSeleccionada);
    let pal="";
    console.log(palabraSeleccionada.length);
    palabraSeleccionada.forEach(letra =>{
        pal += letra+" ";
        console.log(letra);
        document.getElementById("letra").innerHTML = pal;
    });
    //  console.log(_letra);
    // document.getElementById("letra").innerHTML = _letra;
 };

const colocarGuionPalabra = ()=>{
    //console.log(palabraSeleccionada);
    let gion="";
    console.log(palabraSeleccionada.length);
    palabraSeleccionada.forEach(() => {
        gion += "_ ";
     });
    document.getElementById("frase").innerHTML = gion;
};

const selectAleatorioPalabra = () => {
    let palabra = arregloPalabras[Math.floor((Math.random() * arregloPalabras.length))].toUpperCase();
    palabraSeleccionada = palabra.split('');
    console.log(palabraSeleccionada);
    alert(palabraSeleccionada);
};

//Ejecucion del juego
selectAleatorioPalabra();
colocarLetra();
colocarGuionPalabra();
document.addEventListener('keydown', letraPulsada);

