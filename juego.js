//Definir variables
let palabraSeleccionada;
let vidas = 3;
let letraDigitada;
let arregloLetraDigitada = [];
let palab="";
let PalabrasAcertadas= 0;

const terminarJuego=()=>{
    document.removeEventListener('keydown', letraPulsada);
};

const letraCorrecta = letra=>{
    const palabra = palabraSeleccionada;
    for (let index = 0; index < palabra.length; index++) {
        if(palabra[index]===letra){
            PalabrasAcertadas++
            console.log(palabra[index] + " indice: " + index + " Aciertos: " + PalabrasAcertadas);
        }
    }
    //terminar juego si las PalabrasAcertadas es igual a la longitud de la palabra
    if(PalabrasAcertadas=== palabra.length) {
        alert("Ganaste, la pabra es: "+ palabra);
        terminarJuego();
    } 
}


//determinar si la letra es correcta o no pertenece a la palabra a adivinar
//tambien, la letra digitada se ingresa al arreglo de letras digitadas.
const letrasIngresadas = letra => {
    if(palabraSeleccionada.includes(letra)) {
        //letraCorrecta(letra);
        console.log("Letra correcta: " + letra);
        letraCorrecta(letra);
        //recorrer palabraSeleccionada para saber, cuantas letras correctas hay en ella, y guardar la posicion
        //para luego imprimir.
    } else {
        //letraErrada();
        console.log("letra errada: " + letra);
    }
    //addLetter(letter);
    arregloLetraDigitada.push(letra);
    console.log(arregloLetraDigitada);
};

//Detectar la letra pulsada por teclado
const letraPulsada = event => {
    let letraDigitada = event.key.toUpperCase();
   
    //if(letraDigitada.match(/^[a-zñ]$/i) && !usedLetters.includes(letraDigitada)) {
        //falta ingresar letra digitada al arreglo con letterInput ojojojo
        if(letraDigitada.match(/^[a-z]$/i) && !arregloLetraDigitada.includes(letraDigitada) ) {    
        //letterInput(letraDigitada);
            palab = palab + " " + letraDigitada;
            console.log(letraDigitada);
            document.getElementById("colocaletra").innerHTML= palab;
            letrasIngresadas(letraDigitada);
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

//Ejecucion del juego del ahoracado
selectAleatorioPalabra();
colocarLetra();
colocarGuionPalabra();
document.addEventListener('keydown', letraPulsada);

