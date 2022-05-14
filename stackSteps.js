// STACK ---------------------------------------------------------------
//  function Stack(){
//     this.array = [];
//   }
// Como Clase sería:
class Stack {
    constructor() {
        this.array = [];
    }
}

Stack.prototype.push = function (elemento) {
    this.array.push(elemento);
};

const stack = new Stack();
stack.push({hola:"holiS1"});
stack.push(2);
stack.push(3);
stack.push(4);
console.log("stack --> ", stack);




/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


// LINKEDLIST ------------------------------------------------------------------------

// function LinkedList() {
//     this.head = null;
// }
// function Node(valor) {
//     this.value = valor;
//     this.next = null;
// }

class LinkedList {
    constructor() {
        this.head = null;
    }
}
class Node {
    constructor(valor) {
        this.value = valor;
        this.next = null;
    }
};

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

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
console.log("linkedList --> ", linkedList);
console.log("linkedList.head --> ", linkedList.head);
console.log("linkedList JSON --> ", JSON.stringify(linkedList));
