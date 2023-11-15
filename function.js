const test=(valor)=> {
  let binaryString = "";
  let number = valor;
  while (valor > 0) {
    binaryString = (valor % 2) + binaryString;
    valor = Math.floor(valor / 2);
  }
  return console.info(`El decimal "${number}" equivale a: "${binaryString}" en base binario`);   
}


console.log(test(21))