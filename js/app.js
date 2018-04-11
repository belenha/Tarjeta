// Se hace un ciclo do while, que se repetirá mientras el usuario no ingrese los 16 números sin espacios ó ingrese algo que no sea números.

do{
  var cardNumber = prompt('Ingresa los 16 dígitos de tu tarjeta sin espacios');
}while(isNaN(cardNumber) || (cardNumber.length !== 16));

var array = []; // Se crea un array vacío en donde se acomodarán los números de la tarjeta.

for(var i = cardNumber.length -1; i >= 0; i--){  // Se itera sobre la variable cardNumber de atrás hacia adelante.
  array.push(parseInt(cardNumber[i]));  //Se acomodan los números al revés en el array vacío.
}

function isValidCard (){
  var sumPairs = 0;  // se crea una variable para los números en las posiciones pares del array.

  for(var j = 1; j <= array.length-1; j+=2){ // Se itera en los números de las posiciones pares.
    var mult = array[j] *=2; // Se multiplican por 2 los números de las posiciones pares.

    if (mult > 9){ // Si el resultado de la multiplicación tiene 2 dígitos, se deben sumar esos dígitos.
      sumPairs = sumPairs + (Number(mult.toString().charAt(0)) + Number(mult.toString().charAt(1)));
    }else{
      sumPairs += mult; // Se suman todos los números de las posiciones pares.
    }
  }
  var sumOdd = 0; // Se crea una variable para los números de las posiciones impares.
  for (var k = 0; k <= array.length-1; k+=2){ // Se itera en los números de las posiciones impares
    sumOdd += array[k]; // Se suman los números de las posiciones impares.
  }

  var total = sumPairs + sumOdd; // Se hace la suma de todos los números.

  if(total % 10 === 0){ // Si módulo 10 del total de la suma es igual a cero, entonces la tarjeta es valida.
    document.write ('Tu tarjeta es válida, compra muchas cosas'); // Imprimir en la pantalla que es válida.
  }else{ // Si el módulo 10 del total no es igual a cero, la tarjeta NO es válida.
    document.write ('Tu tarjeta es inválida, ve por otra') // Imprimir en la pantalla que la tarjeta No es valida.
  }
}
isValidCard();
