let bandera = true;
function practiceTernario () {
    // if (bandera) {
    //     console.log("Hola en if");
    //     bandera = false;
    // } else {
    //     console.log("Chau en else");
    //     bandera = true;
    // }
    // OPERADOR TERNARIO
    bandera ? console.log("Hola en if") : console.log("Chau en else");
    bandera ? bandera = false : bandera = true;
}

let funcionCorta = (val1,val2) =>  val1+val2;
console.log(funcionCorta(3,5));

practiceTernario();
practiceTernario();
practiceTernario();


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// practice destructuring usando el spread operator
// const [a, b, c, d, e, f, g, h, i, j] = array;
// console.log(a, c, d, e, f, g, h, i, j);// sin el b
// console.log("array", array);
const [a, b, ...c] = array;
console.log(a, b, c);
