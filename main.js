alert ("Bienvenido al validador de expresiones equilibradas");
let nombre = prompt("Por favor ingrese su nombre:");
    if (nombre) {
        alert ("Hola " + nombre + " cómo estas?");
    }

let delimitadores = []

let salir = false
while (salir === false) {
    let opcion = prompt ("Seleccione una opcion: \n1. Validar una expresión \n2.Salir")

    switch (opcion) {
        case "1":
            alert("Haz seleccionado validar una expresión.");
            validarExpresion()
            break;
        case "2":
            alert("Haz salido con éxito de nuestro programa!");
            salir = true;
            break;
        default: 
        alert ("Opción no válida por favor intente de nuevo")

    }
}
function verificarDelimitadores(expresion) {
    let stack = [];
    let pares = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of expresion) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else if ([')', '}', ']'].includes(char)) {
            if (stack.length === 0 || stack.pop() !== pares[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

function validarExpresion() {
    let expresion = prompt("Ingresa una expresión para verificar si los delimitadores están equilibrados:");
    if (verificarDelimitadores(expresion)) {
        alert("La expresión está equilibrada.");
    } else {
        alert("La expresión no está equilibrada.");
    } }