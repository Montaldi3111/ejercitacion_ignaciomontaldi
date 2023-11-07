// 2.Encontrar números primos: Escribe una función que tome un número como argumento y
// determine si es un número primo o no.
// Ignacio Montaldi
const numberInput = document.getElementById('number-input');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    let value = numberInput.value;
    let regex = /^-?\d+\.?\d*$/;
    if (!regex.test(value)) {
        alert('Ingrese un número válido');
    } else {
        Number(value); // Como el value del input es string y anteriormente se verificó que es un número válido, lo transformo a Number.
        let pd = 2;
        while ((value % pd != 0) && pd <= (value / 2)) {
            pd++;
        };
        if (pd > (value / 2)) {
            alert(`El número ${value} es primo.`);
        } else {
            alert(`El número ${value} no es primo.`);
        };
    };
});