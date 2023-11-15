'use strict';

function BinarioADecimal(num) {
   let binario = num.toString();
   let resultado = 0;
   for(let i=0;i<binario.length;i++) {
      resultado += parseInt(binario[i]) * 2 ** (binario.length - 1 - i)
   }
   return resultado
}

function DecimalABinario(num) {
   let resultado = "";
   while(num > 0) {
      resultado = (num%2) + resultado;
      num = Math.floor(num/2);
   }
   return resultado;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
