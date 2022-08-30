const selectAleatorioPalabra = () => {
    let palabra = arregloPalabras[Math.floor((Math.random() * arregloPalabras.length))].toUpperCase();
    palabraSeleccionada = palabra.split('');
    console.log(palabraSeleccionada);
    alert(palabraSeleccionada);

};

selectAleatorioPalabra();