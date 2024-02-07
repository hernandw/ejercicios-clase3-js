// calcular con una funcion recursiva el factorial de un numero dado

//factorial es las multiplicacion de todos los numeros desde 1 hasta el numero dado

//factorial 1 = 1 x 1 = 1

//factorial 2 = 1 * 2 = 2

//factorial 3 = 1 * 2 * 3 = 6
//factorial 4 = 1 * 2* 3 * 4 = 24
//factorial 5 = 1 * 2 *3 *4 * 5 = 120

function factorial(num) {
  //base

  if (num == 0 || num == 1) {
    return 1;
  } else {
      let valor = num * factorial(num - 1);
      
      return valor
  }
}

console.log(factorial(6))


const numeros = [1, 2, 3, 4, 5]

console.log(numeros.length)