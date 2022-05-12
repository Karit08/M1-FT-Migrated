
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    let newA=[];
    for(let i=0; i<array.length; i++){
        if(array[i]<10 && array[i]>=0){
            newA.unshift(array[i]);
        }
    }
    return newA
};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
   let comun;
   let menor= array1[0];
   for (let i=0; i<array1.length;i++){
       comun=array1[i];
       for(let j=0; j<array2.length;j++){
           if (comun === array2[j]){
               return comun;
           }
           if(menor> array2[j]){
               menor= array2[j];
           }
        }
   }
   return menor;
};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
    let newa=[];
    let sum;
    for(let i=0; i<array.length; i++){
     sum=0;
        if (typeof array[i] === 'object'){
            for (let j=0; j<array[i].length; j++){
             sum= sum + array[i][j];
            }
            newa.push(sum);
        }else {
           newa.push(array[i]);
        }
    }
   return newa;
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
    let newAr=[];
    let div= numero/divisor;
    let c=1;
    if (numero%divisor === 0){
        do{
         newAr.push(div);
         c++;
        } while(c<=divisor)
    } else{
        return false;
    }
   return newAr;

};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido

    let small= array[0];
    let large= array[0];
    let newA=[];
    for (let i=1; i<array.length; i++){
        if(small>array[i]){
            small= array[i];
        } 
        if (large<array[i]){
            large= array[i];
        }
    }
  newA.push(small, large);
  return newA;
};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};