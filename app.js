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
let dia = prompt ('Dime un dia de la semana').toLowerCase();
switch (dia) {
    case 'lunes':
        document.write('El dia que seleccionaste es el lunes');
        break;
    case 'martes':
        document.write('El dia que seleccionaste es el martes');
        break;
    case 'miercoles':
        document.write('El dia que selecionaste es el miercoles');
        break;
    case 'jueves':
        document.write('El dia que selecionaste es el jueves');
        break;
    case 'viernes':
        document.write('El dia que selecionaste es el viernes');
        break;
    case 'sabado':
        document.write('El dia que selecionaste es el sabado');
        break;
    case 'domingo':
        document.write('El dia que selecionaste es el domingo');
        break;
    default:
        document.write('Por favor di un numero del 1 al 7');
        break;
}