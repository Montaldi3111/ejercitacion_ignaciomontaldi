// Contar letras y números: Escribe una función que tome una cadena como argumento y
// cuente cuántas letras y números contiene. Por ejemplo, para la entrada "H3ll0 W0rld", la
// función debería devolver un objeto con las propiedades letras igual a 7 y números igual a 4.
// Ignacio Montaldi
window.addEventListener("load", () => {
    let word = {
        text: prompt('Ingresar palabra: '),
        chars: 0,
        numbers: 0,
    };
    let characters = word.text.match(/[a-zA-Z]/g);
    word.chars = characters != null ? characters.length : 0;
    let nums = word.text.match(/[0-9]/g);
    word.numbers = nums != null ? nums.length : 0;
    alert(`Palabra ingresada: ${word.text}\nCantidad de letras: ${word.chars}\nCantidad de números: ${word.numbers}`);
});