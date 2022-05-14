// Actividad 1
function crearClaseLibro() {
  class Libro {
    constructor(titulo, autor, traducciones) {
      // El constructor de la clase Libro recibe titulo (string), autor (string), traducciones (array de objetos)
      // Inicializar las propiedades del libro con los valores recibidos como argumento
      // Tu código aca:
      this.titulo = titulo;
      this.autor = autor;
      this.traducciones = traducciones;
    }

    getTitulo() {
      // este método debe retornar el titulo del libro.
      // Tu código aca:
      return this.titulo;
    }

    getAutor() {
      // El método debe retornar nombre y apellido del autor
      // Tu código aca:
      return this.autor;

    }

    addTraduccion(idioma, editorial) {
      // El método recibe un string 'idioma' y un string 'editorial' y debe agregar un objeto:
      // { idioma: idioma, editorial: editorial} al arreglo de traducciones del libro.
      // No debe retornar nada.
      // Tu código aca:
      let addobj = {
        idioma: idioma,
        editorial: editorial
      }

      this.traducciones.push(addobj); // Nota: this.traducciones ya es un "Array" 

    }

    getTraducciones() {
      // El método debe retornar un arreglo con sólo los idiomas del arreglo de traducciones del libro.
      // Ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getTraducciones() debería devolver ['inglés', 'castellano']
      // Tu código aca:
      let newA = [];
      for (let i = 0; i < this.traducciones.length; i++) {
        newA.push(this.traducciones[i].idioma);
      }
      return newA;

      //  let traducciones=[];  --->otra forma Opción 
      //    this.traducciones.forEach(element => {
      //    traducciones.push(element.idioma)
      //   });
      //   return traducciones
    }

    getAlcance() {
      // El metodo debe retornar la cantidad de idiomas en la que esta traducido el libro.
      // Dato: no se repiten ni los idiomas ni las editoriales
      // ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getAlcance() deberia devolver 2
      // Tu código aca:
      let newA = [];
      let comp;
      newA.push(this.traducciones[0].idioma);
      for (let i = 1; i < this.traducciones.length; i++) {
        comp = this.traducciones[i].idioma
        for (let j = 0; j < newA.length; j++) {
          if (newA[i] === comp) {
            j++;
          }
          if (newA[i] !== comp) {
            newA.push(comp);
          }
        }
      }
      return newA.length;

      /*-------se puede optimizar con .splice o new Set
      for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
          if (array[i] === array[j]) {
            array.splice(j, 1);
            j--;
          }
        }
        return array.length;
        ------------------------------------
        let array = this.getTraducciones();
        const arrayNuevo = new Set(array);
        return arrayNuevo.size;
      */
    }
  }

  return Libro;
}

//Objeto de ejemplo:
// const hogwarts = {
//   staff: {
//     headmaster: {
//       name: "Albus Percival Wulfric Brian Dumbledore",
//     },
//     keeperOfKeys: {
//       name: "Rubeus Hagrid",
//     },
//    potionsMaster: {
//       name: "Severus Snape",
//     },
//   },
// };
const printStaff = function (objeto) {
  // Retornar un arreglo que contenga los strings indicando el titulo y nombre de cada miembro del staff
  // de esta forma "The headmaster is Albus Percival Wulfric Brian Dumbledore" 
  // el arreglo debe mantener el orden que posee el staff del objeto.
  let newA = [];
  for (let prop in objeto.staff) {
    for (let prop1 in objeto.staff[prop]) {
      newA.push('The ' + prop + ' is ' + objeto.staff[prop][prop1])
    }
  }
  return newA;

  /* otra opcion
  newA.push(`The ${prop} is ${objeto.staff[prop].name}`)
  array.push("The " + elem + " is " + objeto.staff[elem].name) 
  */
};



/* **************************************************************************************************************************** */

// Ultimo ejercicio
// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados (Atencion: excepto que esten adentro de un array, esas propiedades no se cuentan)

// Ejemplo:
var obj = {
  a: {
    a1: 10,
    a2: '10',
    a3: { a3a: '10', a3b: '10', a3c: { a3c1: true } }
  },
  b: 2,
  c: [1, { a: 1 }, 'Duda']
}
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, y a3 tiene otras 3.
// Propiedades: a, a1, a2, a3, a3a, a3b, a3c, a3c1, b, c --> 10 en total

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.
var countProps = function (obj) {
  // Tu código aca:
  let count = 0;
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) { // este if es opcional, directamente se puede hacer count++;
      count++;
    }
    if (typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) {
      count = count + countProps(obj[prop]);
    }
  }
  return count;
}

console.log(countProps(obj))

// {a : 3}
// property = a
// obj[property] = 3

/**************************************************************************************** */

// Preparandonos para recursividad
// Objetivo: Realizar una funcion que devuelva "Par" si el numero es par o "Impar" caso contrario, pero utilizando recursividad en lugar de %

//Ejemplo 
// parImpar(20)
// "Par"

let pi;
let parImpar = (num) => {
  if (num === 1) {
    pi = 'Impar';
    return 'Impar';
  }
  if (num === 0) {
    pi = 'Par';
    return 'Par';
  }
  if (num > 0) {
    parImpar(num - 2);
    return pi;
  }

  /* --otra opcion 
  let parImpar = (num) => {
  let numBase = 2;
  if (num === 0) {
    return "Par";
  } else if (num === 1) {
    return "Impar";
  } else if (num === numBase) {
    return "Par";
  } else {
    num = num - numBase;
    return parImpar(num);
  }
};
​
console.log(parImpar(21));*/
}


module.exports = { crearClaseLibro, printStaff };
