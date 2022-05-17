function timeConversion(time) {
  // dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
  // Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
  //las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 

  let hora = time.slice(0, 2);
  let min = time.slice(3, 5);
  let seg = time.slice(6, 8);
  let ap = time.slice(8, 11);
  let chora = 12;

  if (time.length < 10) return (false);
  if (ap === 'AM' || ap === 'PM') {
    if (hora < 13 && min < 60 && seg < 60 && ap === 'PM') {
      if (hora === '12') {
        return chora + ':' + min + ':' + seg;
      } else {
        chora = chora + Number(hora);
        return chora + ':' + min + ':' + seg;
      }
    } else if (hora < 13 && min < 60 && seg < 60 && ap === 'AM') {
      if (hora === '12') {
        return '00' + ':' + min + ':' + seg;
      } else {
        return hora + ':' + min + ':' + seg;
      }
    } else { return false; }
  }

  /*------------> otra opción 
  if (
      time.slice(-2) === "AM" &&
      parseInt(time.slice(3, 5), 10) < 60 &&
      parseInt(time.slice(6, 8), 10) < 60
    ) {
      if (time.slice(0, 2) === "12") {
        return "00" + time.slice(2, 8);
      } else {
        return time.slice(0, 8);
      }
    } else {
      if (
        parseInt(time.slice(0, 2), 10) < 13 &&
        parseInt(time.slice(3, 5), 10) < 60 &&
        parseInt(time.slice(6, 8), 10) < 60
      ) {
        let hora = parseInt(time.slice(0, 2), 10) + 12;
        if (hora === 24) {
          hora = "12";
        }
        return hora + time.slice(2, 8);
      }
      return false;
    }
  }
  */
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.

/*
Crear una funcion saludar que pueda fijar cada vez que la guardo en una variable distintos saludos.
Recibira en la funcion interna el nombre a quien tiene que saludar y retornara el saludo correspondiente seguido por el nombre al ser invocada.
*/
function saludar(saludo) {
  let news = saludo;
  return function (nombre) {
    return news + nombre;
  }
}

/*---------------------------------------------------*/

/* 
Crear una funcion contador que debe incrementar de a uno cada vez que invoco la funcion.
Adicionalmente agregarle una funcion que cuando pasen 8 seg incremente el contador a 100.

*/
function contador() {
  let count = 0;
  setTimeout(function () {
    count = 100;
  }, 8000);
  return function icrementar() {
    count = count + 1;
    return count;
  };
}


/*---------------------------------------------------*/
/*
  Retorna una funcion que cuando sea invocada retorne un valor creciente.
 el primer valor debe ser el que se le pase por parametro a la funcion global.
 
 ejemplo: const Pepe = creciendo(20);
 Pepe(); // "El proximo año va a tener 21"
 Pepe(); // "El proximo año va a tener 22"
*/
function creciendo(n) {
  let count = n;
  return function () {
    count++;
    return "El proximo año va a tener " + count;
  };
}

/*---------------------------------------------------*/
// Retorna una funcion que cuando sea invocada con un valor mayor a 50 retorne un valor decreciente,
// pero si el valor es menor o igual que 50 retorne un valor creciente
// el primer valor debe ser el que se le pase por parametro a la funcion global.
// ejemplo: const newCounter = arribaArbajo(49);
// newCounter(); // 50
// newCounter(); // 51
// newCounter(); // 52
// newCounter(); // 53
// ejemplo: const newCounter = arribaArbajo(52)
// newCounter(); // 51
// newCounter(); // 50
// newCounter(); // 49

function arribaAbajo(n) {
  let count = n;
  if (count > 50) {
    return function () {
      count--;
      return count;
    };
  } else if (count <= 50) {
    return function () {
      count++;
      return count;
    };
  }
}

/*---------------------------------------------------*/

// Implementar la funcion closureSum que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo:
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function (multiplier) {
  let base = multiplier;
  return function (por) {
    let result;
    result = base * por;
    return result;
  }
};

/*---------------------------------------------------*/

function cacheFunction(cb) {
  // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!
  let cache = {}; 
  return function (arg) {
    if (cache.hasOwnProperty(arg)) { 
      return cache[arg]; //---> retornando resultado previamente guardado
    }
    else { 
    cache[arg] = cb(arg); // se guarda el argumento y resultado de la invocavión 
    return cache[arg];
    }
  };
  //let multi= cacheFunction(function(x) { return x * x; }) ----> multi(4) ---> return 16
}

module.exports = {
  timeConversion
}