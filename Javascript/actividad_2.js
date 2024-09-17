// EJERCICIO 1
console.log("EJERCICIO 1 \n---------------------------------------");

let n = 15;
let mensaje2 = n > 10 ? "El número es mayor que 10" : "El número no es mayor que 10";
console.log(mensaje);



// EJERCICIO 2
console.log("EJERCICIO 2 \n---------------------------------------");

let numero = 7; 

if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}


// EJERCICIO 3
console.log("EJERCICIO 3 \n---------------------------------------");

let calificacion = 85;

if (calificacion >= 60) {
    console.log("El estudiante ha aprobado.");
} else {
    console.log("El estudiante ha reprobado.");
}


// EJERCICIO 4
console.log("EJERCICIO 4 \n---------------------------------------");

let nota = 85; 

if (nota >= 90 && nota <= 100) {
    console.log("Calificación: A");
} else if (nota >= 80 && nota <= 89) {
    console.log("Calificación: B");
} else if (nota >= 70 && nota <= 79) {
    console.log("Calificación: C");
} else if (nota >= 60 && nota <= 69) {
    console.log("Calificación: D");
} else {
    console.log("Calificación: F");
}

// EJERCICIO 5
console.log("EJERCICIO 5 \n---------------------------------------");

let temperatura = 18;

if (temperatura < 0) {
    console.log("Frío");
} else if (temperatura >= 0 && temperatura <= 15) {
    console.log("Fresco");
} else if (temperatura >= 16 && temperatura <= 25) {
    console.log("Templado");
} else {
    console.log("Caliente");
}


// EJERCICIO 5
console.log("EJERCICIO 5 \n---------------------------------------");

let edad = 20; 

let mensaje1 = (edad >= 18) ? "Es mayor de edad." : "Es menor de edad.";
console.log(mensaje1);


// EJERCICIO 6
console.log("EJERCICIO 6 \n---------------------------------------");

let contrasenaIngresada = "12345"; 
let contrasenaCorrecta = "12345"; 


let contraseña = (contrasenaIngresada === contrasenaCorrecta) ? "Contraseña correcta." : "Contraseña incorrecta.";
console.log(contraseña);
