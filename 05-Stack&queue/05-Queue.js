const { Queue } = require("../estructuras");
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola

var controlAcces = function (queue, event) {
  // Tu código aca:
  // crean instancia de Queue
  // los que cumplen los rquerimientos solo agregan (push) al array sus names
  // en caso que no cumplan los dequeue de la queue
  let access = [];
  let num = [];
  while (queue.size() > 0) {
    let reviso = queue.dequeue();
    if (reviso.age >= 18 && reviso.ticket.event === event && !num.includes(reviso.ticket.number)) {
      access.push(reviso.fullname);
      num.push(reviso.ticket.number); // tengo que usar push porque no me funciona mi método enqueue
    }
  }
  return access; 
}

// Test Queue
const queue = new Queue();
queue.enqueue({
  fullname: "Mauro",
  age: 17,
  ticket: { number: 1, event: "Day" },
});
queue.enqueue(6);
queue.enqueue("Hola");
console.log(queue);


// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.
//////////////////////////// RECURSIVIDAD //////////////////////////////////////////////////////////////////////////////

let array = [1, 2, 3, 1, 2, 3, { a: 1 }, { a: 1 }];
let demo = new Set(array);

/* ---------------------------------------------------------------------------------------------------- */

// Cola de banco

// First in First Out

// Vemos lo ya implementado en el archivo estructuras.js
// class Queue {
//   constructor() {
//     this.queue = [];
//   }
//   enqueue(el) {
//     this.queue.push(el);
//   }
//   dequeue() {
//     return this.queue.shift();
//   }
//   size() {
//     return this.queue.length;
//   }
// }

/*
  Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
  debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
  Ejemplo:
  - queueOne: [1,3,5]
  - queueTwo: [2,4,6]
  mergeQueues(queueOne, queueTwo) --> [1,2,3,4,5,6]
  IMPORTANTE: Lo que recibe NO son arreglos sino que son Queues.
  */
var mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:
  // [1, 3, 5]           [2, 4, 6]        ----> [3, 5]             [4, 6]
  let newQueue= new Queue();
  while(queueOne.size()>0 || queueTwo.size()>0){
    var e1= queueOne.dequeue();
    var e2= queueTwo.dequeue();
    newQueue.enqueue(e1);
    newQueue.enqueue(e2);
  }
  return newQueue;
}


/*
  // &&
v    v    v  --> 2do elemento
v    f    f
f    v    f
f    f    f
  // ||
v    v    v  --> 1er elemento
v    f    v
f    v    v
f    f    f
*/
/* -----------------------------------------------------------*/

//Realiza una funcion que filtre los numeros del array recibido y arme una queue con el resto de los elementos
//Ejemplo
// let array = [1, "a", 2, "b", [1, 2, 3]]
// filtraQueue(array)
// -> ["a", "b", [1, 2, 3]]

function filtraQueue(arg) {
  let newQueue = new Queue();
  for (i = 0; i < arg.length; i++) {
    if (typeof arg[i] !== "number") {
      queue.enqueue(arg[i]);
    }
  }
  return queue;
}


module.exports = {
  controlAcces,
};