
function elementsRepetitions(array) {
    let objectHash = {}; // tipo typescript (use strict) es let objectHash: {[key:string]:number} = {};
    for (const element of array) {  // como toma el array para recorrer usamos for of y NOOO for in jua
        if (element in objectHash) {
            objectHash[element] = objectHash[element] + 1; // si ya existe su value se incrementa en uno
        } else {
            objectHash[element] = 1; // esta es su primera aparición
        }
    }
    console.log("objectHash contiene ", objectHash);
    console.log("count cant. elements ", Object.keys(objectHash).length); // para contar la cantidad de elementos
    return Object.keys(objectHash).length;
    // console.log("objectHash contiene ", objectHash);
    // console.log("array de string con las keys del object ", Object.keys(objectHash));
    // console.log("array de number ordenados con las keys del object ", Object.keys(objectHash).map(key => parseInt(key, 10)));
}
const array = [2, 5, 4, 2, 7, 7, 6, 11]
const array2 = ["ingles", "frances", "frances", "ingles", "español"]
elementsRepetitions(array2);
