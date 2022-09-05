//Definir variables
let palabraSeleccionada="";
let vidas = 6;
let letraDigitada="";
let arregloLetraDigitada = [];
let palab="";
let PalabrasAcertadas= 0;
let PalabraAdi="";
let palabrasCorrectas=[];
let palabrasIncorrectas=[];

const dibujAhorcado = document.getElementById("hombre");
dibujAhorcado.src= "imagenes/0" + vidas + ".png";

let $elem=document.querySelector(".adivinado");
$elem.innerHTML = "";

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


const  acertada = letra=>{
    //let $elem=document.querySelector(".adivinado");
    
    //
    $elem = document.querySelector(".adivinado");
    console.log($elem.innerHTM);
    $elem.innerHTML="";
    for(let letr of palabraSeleccionada){
        let $span = document.createElement("span");
        let $txt = document.createTextNode("");   
    
        console.log("Letr: " + letr);
        
        if(letra.indexOf(letr) >= 0){
            $txt.nodeValue= letra;
            console.log("imprime Letra: " + letra);
        }
        $span.setAttribute('class','letra adivinada');
        $span.appendChild($txt);
        $elem.appendChild($span);
    };
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
    //  $elem=document.querySelector(".adivinado");
    //  let $span = document.createElement("span");
    //  let $txt = document.createTextNode("");   
      //$elem.innerHTML="";
    for (let index = 0; index < palabra.length; index++) {
        
        //if(palabra[index]===letra){  //ojojojojo. verificar con las letras adivinadas
        //console.log("PalabraAdi: "+ PalabraAdi[index]);
        if(palabrasCorrectas[index]===letra){    
            PalabrasAcertadas++
            word+=letra + " ";
            console.log(palabra[index] + " indice: " + index + " Aciertos: " + PalabrasAcertadas);
             //$txt.nodeValue=letra;  
            //console.log($txt.nodeValue);
            console.log(" Palabras Correctas: " + palabrasCorrectas);
            acertada(letra);
        }
        else{
            word= word +  PalabraAdi[index * 2] + " ";//mejorar la impresion grafica
        }
        // $span.setAttribute('class','letra adivinada');
        // $span.appendChild($txt);
        // $elem.appendChild($span);

    }
    PalabraAdi = word;
    //alert(PalabraAdi.length);
    mostarLetraAcertada(PalabraAdi); //verificar no funciona
    colocarLetras(PalabraAdi);
    //acertada(PalabraAdi);
    //terminar juego si las PalabrasAcertadas es igual a la longitud de la palabra
    console.log()
    if(PalabrasAcertadas=== palabra.length) {
        alert("Ganaste 😀, la palabra es: "+ word);
        for (let index = 0; index < word.length; index++) {
            console.log(word[index]);
        }
        terminarJuego();
    } 
}

const letraErrada = letra =>{
    $elem = document.querySelector(".errado");
    console.log($elem.innerHTM);
    $elem.innerHTML="";
    for(let letr of palabrasIncorrectas){
        let $span = document.createElement("span");
        let $txt = document.createTextNode(letr);   
    
        // console.log("Letr: " + letr);
        
        // if(letra.indexOf(letr) >= 0){
        //     $txt.nodeValue= letra;
        //     console.log("imprime Letra: " + letra);
        // }
        $span.setAttribute('class','letra errada');
        $span.appendChild($txt);
        $elem.appendChild($span);
    };
}
//reformado

/* ********************* */
const letraCorrectaF = letra=>{
    
    console.log("lc_letra: " + letra );
    
    const palabra = palabraSeleccionada;
    console.log("Palabra aleatoria:" + palabra);
    
    let word="";
    let $elem=document.querySelector(".adivinado");
    $elem.innerHTML="";
    PalabrasAcertadas=0;
    for(let letraa of palabra){
        let $span = document.createElement("span");
        let $txt = document.createTextNode("");   
        console.log("palabra: "+palabra);
        console.log("letraa: "+letraa);
        console.log("indice pc: " +palabrasCorrectas.indexOf(letraa));
        
        if(palabrasCorrectas.indexOf(letraa)>=0)   {
            $txt.nodeValue=letraa;  
            console.log("txt nodevalue: " +$txt.nodeValue  );
            console.log("letra" + letraa);
            PalabrasAcertadas++;
        } 
        $span.setAttribute('class','letra adivinada');
        $span.appendChild($txt);
        $elem.appendChild($span);
    }
    
    PalabraAdi = word;
    //alert(PalabraAdi.length);
   // mostarLetraAcertada(PalabraAdi); //verificar no funciona
   // colocarLetras(PalabraAdi);
    //acertada(PalabraAdi);
    //terminar juego si las PalabrasAcertadas es igual a la longitud de la palabra
    
    console.log("array pal correc: "+palabrasCorrectas);
    console.log("palabras correc: "+palabrasCorrectas.length);

    //utilizar un contador para saber total letras PalabrasAcertadas
    //pporque se valida que los letra s dobles o repetidas se cuenta una sola vez
    //genrando error al validar el siguiente if
    if(PalabrasAcertadas=== palabra.length) {
        alert("Ganaste 😀, la palabra es: "+ palabra);
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
        console.log("Letra correcta e ingresadas: " + letra);
        palabrasCorrectas.push(letra);
        console.log(palabrasCorrectas);
        letraCorrectaF(letra);
    } else {
        console.log("letra errada: " + letra);
        palabrasIncorrectas.push(letra);
        letraIncorrecta(letra);
        letraErrada(letra);
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

    // $elem=document.querySelector(".adivinado");
    // let $span = document.createElement("span");
    // let $txt = document.createTextNode("");   
    // $elem.innerHTML="";
    palabraSeleccionada.forEach(letra =>{
        pal += letra+" ";
        //$txt.nodeValue = letra;
        document.getElementById("letrax").innerHTML = pal;
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
letraCorrectaF("");
colocarLetra();
colocarGuionPalabra();

document.addEventListener('keydown', letraPulsada);

