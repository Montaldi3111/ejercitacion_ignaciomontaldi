// 1-Revertir una cadena: Escribe una función que tome una cadena como argumento y
// devuelva la cadena invertida.
// Ignacio Montaldi
const input = document.getElementById('input');
const button = document.getElementById('btn');

button.addEventListener('click',() => {
    var string = input.value;
    var newString='';
    var j = string.length-1;
    for(var i = 0; i < string.length; i++) {
        newString = newString + string[j];
        j--;
    }
    alert(`Palabra original: ${string} \nPalabra invertida: ${newString}`);
})