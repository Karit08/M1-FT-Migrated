function Queue() {
    this.array = [];
}

Queue.prototype.enqueue = function (elemento) {
    return this.array.push(elemento);
}

Queue.prototype.dequeue = function () {
    return this.array.shift();
}

Queue.prototype.size = function () {
    return this.array.length;
}

var playerOne;
playerOne = new Queue();
playerOne.enqueue({ attack: 5, defense: 5 });
playerOne.enqueue({ attack: 15, defense: 10 });
console.log("dos enqueue ", JSON.stringify(playerOne))
playerOne.enqueue({ attack: 28, defense: 26 });
playerOne.enqueue({ attack: 5, defense: 12 });
console.log("ya cuatro enqueue ", JSON.stringify(playerOne))

// las queue sacan el primer elemento de la lista a diferencia 
// de las linkedlist que sacan el ultimo siendo su sigla de 
// entendimiento LIFO, que significa Last In First Out y es la última 
// que entra es la primera que sale.

var playerTwo;
playerTwo = new Queue();
playerTwo.enqueue({ attack: 5, defense: 5 });
playerTwo.enqueue({ attack: 15, defense: 10 });
playerTwo.enqueue({ attack: 28, defense: 26 });
playerTwo.enqueue({ attack: 5, defense: 12 });

function compareQueue(queueOne, queueTwo) {
    if (queueOne.size() > 0 && queueOne.size() !== queueTwo.size()) {
        console.log("not same size");
        return false;
    }
    let result;
    let sizeQueueOne = queueOne.array.length;
    // console.log("sizeQueueOne ", sizeQueueOne);
    for (let i = 0; i < queueOne.array.length; i++) {
        const obj1 = queueOne.array[i];
        const obj2 = queueTwo.array[i];
        for (const prop in obj1) {
            console.log("propiedad ", prop);
            console.log("value obj1 ", obj1[prop]);
            if(obj1[prop] === obj2[prop]){
                result = true;
                console.log("same", result);
            } else {
                result = false;
                break;
            }
        }
    }
    console.log("same size and result is ", result);
    return result;
};


compareQueue(playerOne, playerTwo)
// Ejemplo de result in false
var playerOneZero;
playerOneZero = new Queue();
playerOneZero.enqueue({ attack: 5, defense: 5 });
playerOneZero.enqueue({ attack: 15, defense: 10 });
playerOneZero.enqueue({ attack: 28, defense: 26 });
playerOneZero.enqueue({ attack: 5, defense: 12 });

var playerTwoZero;
playerTwoZero = new Queue();
playerTwoZero.enqueue({ attack: 5, defense: 5 });
playerTwoZero.enqueue({ attack: 162, defense: 10 });
playerTwoZero.enqueue({ attack: 28, defense: 229 });
playerTwoZero.enqueue({ attack: 8, defense: 12 });

compareQueue(playerOneZero, playerTwoZero)
var cas =1
var cas =0
console.log("cas ", cas)