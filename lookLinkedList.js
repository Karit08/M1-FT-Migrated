
// ---- Linked List ----
//EJERCICIO 1
// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de menor a mayor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [1]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [1] --> [4] --> [5]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.

function Node(valor) {
    this.value = valor;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.add = function (valor) {
    var nuevoNodo = new Node(valor);

    if (!this.head) {
        this.head = nuevoNodo;
    } else {
        var tailActual = this.head;
        while (tailActual.next !== null) {
            tailActual = tailActual.next;
        }
        tailActual.next = nuevoNodo;
    }
}


LinkedList.prototype.remove = function () {
    if (!this.head) {
        return undefined;
    }

    if (this.head.next === null) {
        var unicoNodo = this.head;
        this.head = null;
        return unicoNodo.value;
    }

    var nodoActual = this.head.next;
    var nodoPrevious = this.head;
    while (nodoActual.next !== null) {
        nodoPrevious = nodoActual;
        nodoActual = nodoActual.next;
    }
    nodoPrevious.next = null;
    return nodoActual.value;
}

LinkedList.prototype.deleteHead = function () {
    if (this.head) {
        if (this.head.next) {
            const secondNode = this.head.next;
            this.head = secondNode;
        } else {
            this.head = null;
        }
    }
}


LinkedList.prototype.search = function (arg) {
    console.log("arg es ", arg);
    var nodoActual = this.head;
    if (nodoActual === null) {
        return null;
    }
    console.log("nodoActual es ", nodoActual);
    while (nodoActual !== null) {
        if (typeof arg === "function") {
            console.log("entra al typeof");
            if (arg(nodoActual.value)) {
                return nodoActual.value;
            }
        } else if (nodoActual.value === arg) {
            return nodoActual.value;
        }
        nodoActual = nodoActual.next;
    }

    return null;
}



// TESTEANDO en Consola
var linkedList = new LinkedList();
// linkedList.add(4);
linkedList.add(5);
linkedList.add(2);
linkedList.add(15);
linkedList.add(1);
// linkedList.add(2);
// linkedList.add(1);

// console.dir(linkedList, { 'maxArrayLength': null });
// console.log("linkedList origin is ", linkedList);

console.log("La lista usando JSON stringify es ----> ")
console.log(JSON.stringify(linkedList))

// Objetos con objetos
// Ejemplo de como se ve en consola la lista enlazada ListTest si se le agregan los nodo de
// value 4, value 5 y value 2
// var ListTest = new LinkedList();
// LinkedList {
//   head: Node { value: 4, next: Node { value: 5, next: Node { value:2, next: null } } }
// }

// LinkedList.prototype.size = function () {
//     // Tu código aca:
//     var nodoActual = this.head;
//     let contador = 0;
//     if (nodoActual === null) {
//         return 0;
//     }
//     while (nodoActual !== null) {
//         contador = contador + 1;
//         nodoActual = nodoActual.next;
//     }
//     return contador;
// }

// console.log("size is ", linkedList.size());
