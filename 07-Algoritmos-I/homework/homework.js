'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let result = [1]
  let valorActual = 2;
  while(num > 1) {
    if(num % valorActual === 0) {
      result.push(valorActual);
      num = num / valorActual;
    } else {
      valorActual++
    }
  }
  return result;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true;
  while(swap) {
    swap = false;
    for(let i = 0; i < array.length; i++) {
      if(array[i] > array[i+1]) {
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swap = true;
      }
    }
  }
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
    for(let i = 1; i < array.length; i++) {
      let x = i - 1;
      let aux = array[i];
      while(x >= 0 && array[x] > aux) {
        array[x+1] = array[x];
        x--
      }
      array[x+1] = aux;
    }
    return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length; i++) {
    let min = i;
    for(let x = i + 1; x < array.length; x++) {
      if(array[x] < array[min]) min = x;
    }
    if(min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
