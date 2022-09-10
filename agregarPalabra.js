

const nuevasPalabras= document.getElementById("main__section__botones--guardarEmpezar");
const btnCancelar = document.getElementById("main__section__botones--cancelar");
const ocultarAgregarPalabras = document.querySelector(".main__agregarPalabra");

var msg = document.querySelector(".validarMensaje"); 
msg.innerHTML="";    

// const mostrarMenuPalabra = ()=>{
//   ocultarAgregarPalabras.style.display="";
// }


//validar nueva palabra

const mensajes = ()=>{
    msg.innerHTML="";
}

const cancelar = ()=>{
  //btnCancelar.style.display="none";
  ocultarAgregarPalabras.style.display="none";
  ocultarBotones.style.display="";

}

const  nuevaPalabra = ()=>{
  //texto.value = "FAm";
  const texto = document.getElementById("agregarPalabra");
  //var msg = document.getElementById("validarMensaje");
  //msg.value="";
  console.log(texto.value.length);
  console.log(texto.value);
  msg.innerHTML="";
  if ((texto.value.length <= 8) && texto.value.match(/^[a-z]+$/i)){
    arregloPalabras.push(texto.value.toUpperCase());
    console.log(arregloPalabras);
    alert("el texto ingresado " + texto.value.toUpperCase() + " cumple la longitud " + texto.value.length + " Se adiciono la palabra")
    flag = true;
    cancelar();
    nuevoJuego();
    
  }
  else{
    
    let span = document.createElement("span");
    let txt = document.createTextNode("palabra no valida");   
    
    span.setAttribute('class','main__agregarPalabra');
    span.appendChild(txt);
    msg.appendChild(span);
    //setTimeout()
    setTimeout(mensajes, 5000);
    // setTimeout(msg.innerHTML="", 2000);
    
    //msg.value="Error x";
    console.log(msg.value) ;
    //alert("Maximo 8 caracteres ó palabra no valida " + texto.value.toUpperCase() + " su longitud es: " +texto.value.length);
     
     texto.focus();
    }
}



nuevasPalabras.addEventListener('click', nuevaPalabra);
btnCancelar.addEventListener('click',cancelar);

