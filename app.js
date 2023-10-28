//  las condiciones son if, if else, switch.
// let numero1 = 23;
// let numero2 = 20;

// if (numero1 > numero2) {
//     document.write('El numero: ' + numero1 + ' es mayor que el numero: ' + numero2 );

// }else{
//     document.write('El numero: ' + numero2 + ' es mayor que el numero: ' + numero1 );
// }

// pedir la edad del usuario, decirle si es mayor de edad siempre y cuando te de un valor mayor a 0

// let edad= prompt ('dame tu edad');
// if (edad > 0) {
//     if (edad >= 18){
//     document.write('Ya tienes bigote');
//     }else{
//         document.write('todavia no te sale pelo');
//     }
// }else {
//     document.write('Escribe una edad validad');
// }
// let dia = prompt ('Dime un dia de la semana').toLowerCase();
// switch (dia) {
//     case 'lunes':
//         document.write('El dia que seleccionaste es el lunes');
//         break;
//     case 'martes':
//         document.write('El dia que seleccionaste es el martes');
//         break;
//     case 'miercoles':
//         document.write('El dia que selecionaste es el miercoles');
//         break;
//     case 'jueves':
//         document.write('El dia que selecionaste es el jueves');
//         break;
//     case 'viernes':
//         document.write('El dia que selecionaste es el viernes');
//         break;
//     case 'sabado':
//         document.write('El dia que selecionaste es el sabado');
//         break;
//     case 'domingo':
//         document.write('El dia que selecionaste es el domingo');
//         break;
//     default:
//         document.write('Por favor di un numero del 1 al 7');
//         break;
// }

// OPERADOR TERNARIO
// let numero1 = 15;
// let numero2 = 20;
// let valor = (numero1 > numero2) ? 'El numero 1 es mayor' : 'El numero 2 es mayor'
// document.write(valor);

// pedir 2 numero y decir cual es mayor, menor o igual

// let numero1 = prompt('Por favor di un numero');
// let numero2 = prompt('Por favor di otro numero');

// if (numero1 > numero2) {
//     document.write('El numero primero mayor es : ' + numero1);
    
// }else if (numero1 < numero2) {
//     document.write('El numero segundo mayor es : ' + numero2);
// }else if (numero1 = numero2) {
//     document.write('Los numeros son iguales : ' + numero1);
// }

// par o impar
// let par = prompt ('Escribe un numero');
// let valor = (par % 2===0) ? 'El numero es par' : 'El numero es impar'
// document.write (valor);

// pedir dos numeros y devolder el cociente

// let numero1 = prompt ('Escribe un numero');
// let numero2 = prompt ('Escribe otro numero');

// if (numero1 == 0 || numero2 == 0){
// document.write(' Error 404 ');
// }else if (numero1 > 0 && numero2 > 0){

//     document.write('El cociente es '+ numero1/numero2);
// }

//  pida dos números y pregunte cuál operación quiere hacer con los números, sumar, restar, multiplicar o dividir.
let numero1 = prompt('Introduce un numero');
let numero2 = prompt('Introduce otro numero');
numero1 = Number(numero1);
numero2 = Number(numero2);

let operacion = prompt('Que operacion desea realizar  (sumar, restar, multiplicar, o dividir)');

switch (operacion) {
    case 'sumar':
       document.write('El resultado de la suma es: '+ (numero1+numero2));
        
        break;
    case 'restar':
        document.write('El resultado de la resta es: '+(numero1-numero2));

        break;
    case 'multiplicar':
        document.write('El resultado de la multiplicacion es:' + (numero1*numero2));
        
        break;
    case 'dividir':
        document.write('El resultado de la division es: ' + (numero1/numero2));

        break;
    default:
        document.write('Escribe una operacion aritmetica');
        break; 
        
}