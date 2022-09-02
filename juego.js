//Definir variables
let palabraSeleccionada;
let vidas = 6;
let letraDigitada;
let arregloLetraDigitada = [];
let palab="";
let PalabrasAcertadas= 0;
let PalabraAdi;

const dibujAhorcado = document.getElementById("dibujarHombre")
//inicia con la base de la ahoracado
dibujAhorcado.src= "imagenes/0" + vidas + ".png";


const terminarJuego=()=>{
    document.removeEventListener('keydown', letraPulsada);
};

const mostarLetraAcertada= letra=>{
    document.getElementById("colocaletraAcertada").innerHTML = letra
}

//disminuir el numero de vidas establecidas
const letraIncorrecta = ()=>{
    vidas--; 
    console.log(vidas);
    dibujAhorcado.src= "imagenes/0" + vidas + ".png";
    console.log(dibujAhorcado.src);

    
    console.log("Vidas Restantes: " + vidas);
    if (vidas===0) {
        terminarJuego();
        alert("Perdiste: Fin del juego :-( 🤪")
    }
}

const colocarLetras = letra=>{
    let gion="";
    for (let index = 0; index < letra.length; index++) {
        gion += letra[index] + " ";
    }
    document.getElementById("frase").innerHTML = gion;
};

const letraCorrecta = letra=>{
    const palabra = palabraSeleccionada;
    let word="";
    for (let index = 0; index < palabra.length; index++) {
        if(palabra[index]===letra){
            PalabrasAcertadas++
            word+=letra + " ";
            console.log(palabra[index] + " indice: " + index + " Aciertos: " + PalabrasAcertadas);
        }
        else{
            word= word +  PalabraAdi[index * 2] + " ";//mejorar la impresion grafica
        }
    }
    PalabraAdi = word;
    //alert(PalabraAdi.length);
    mostarLetraAcertada(PalabraAdi); //verificar no funciona
    colocarLetras(PalabraAdi);
    //terminar juego si las PalabrasAcertadas es igual a la longitud de la palabra
    if(PalabrasAcertadas=== palabra.length) {
        alert("Ganaste 😀, la palabra es: "+ word);
        for (let index = 0; index < word.length; index++) {
            console.log(word[index]);
        }
        terminarJuego();
    } 
}

//determinar si la letra es correcta o no pertenece a la palabra a adivinar
//tambien, la letra digitada se ingresa al arreglo de letras digitadas.
const letrasIngresadas = letra => {
    if(palabraSeleccionada.includes(letra)) {
        console.log("Letra correcta: " + letra);
        letraCorrecta(letra);
    } else {
        console.log("letra errada: " + letra);
        letraIncorrecta(letra);
    }
    arregloLetraDigitada.push(letra);
    console.log(arregloLetraDigitada);
};

//Detectar la letra pulsada por teclado
const letraPulsada = event => {
    let letraDigitada = event.key.toUpperCase();
        if(letraDigitada.match(/^[a-z]$/i) && !arregloLetraDigitada.includes(letraDigitada) ) {    
            palab = palab + " " + letraDigitada;
            document.getElementById("colocaletra").innerHTML= palab;
            letrasIngresadas(letraDigitada);
        };
};

const colocarLetra = ()=>{
    let pal="";
    console.log(palabraSeleccionada.length);
    palabraSeleccionada.forEach(letra =>{
        pal += letra+" ";
        document.getElementById("letra").innerHTML = pal;
    });
 };

const colocarGuionPalabra = ()=>{
    let gion="";
    palabraSeleccionada.forEach(() => {
        gion += "_ ";
     });
    document.getElementById("frase").innerHTML = gion;
    PalabraAdi = gion;
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

