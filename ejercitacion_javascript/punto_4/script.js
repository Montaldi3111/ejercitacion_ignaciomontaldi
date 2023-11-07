// Encontrar el número más grande: Escribe una función que tome un array de números
// como argumento y devuelva el número más grande en el array.
// Ignacio Montaldi
window.addEventListener('load', () => {
    do{
        var quantity = prompt('Ingresar la cantidad de números que contendra el array \nLa cantidad no puede ser 0.');
    }while(quantity == 0);
    let numbers = new Array;
    for (var i = 0; i < quantity; i++){ // Suponiendo que el usuario ingresa números válidos.
        numbers.push(prompt('Ingresar número: '))
    }
    let maxNum = Number(numbers[0]);
    for(var i = 1; i < numbers.length; i++){ // Inicio en 1 porque tomo al primer valor como máximo
        if(Number(numbers[i]) > maxNum){
            maxNum = Number(numbers[i]);
        }
    }
    alert(`Lista: ${numbers}\nEl número más grande de la lista es: ${maxNum}`);
})