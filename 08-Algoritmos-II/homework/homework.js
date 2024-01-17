'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;

  let pivot = array.shift();
  let left = [];
  let right = [];
  let equal = [pivot];

  for(let i = 0; i < array.length; i++) {
    if(array[i] < pivot) {
      left.push(array[i])
    } else if (array[i] > pivot) {
      right.push(array[i])
    } else {
      equal.push(array[i]); 
    }
  }
  return quickSort(left).concat(equal).concat(quickSort(right))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;

  let middle = Math.round(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {   
  let arrayResult = [];   
  let indexLeft = 0;   
  let indexRight = 0;   

  while(indexLeft < left.length && indexRight < right.length) {
    if(left[indexLeft] < right[indexRight]) {
      arrayResult.push(left[indexLeft])
      indexLeft++;
    } else {
      arrayResult.push(right[indexRight])
      indexRight++
    }
  }
  return arrayResult.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
