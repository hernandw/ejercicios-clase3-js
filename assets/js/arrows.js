function suma(n1, n2) {
  let resultado = n1 + n2;
  return resultado
}


let suma = (n1, n2) => n1 + n2

console.log(suma(8, 9))


function verificar(numero) {
  if (numero > 0) {
    resultado = "positivo";
  } else if (numero < 0) {
    resultado = "negativo";
  } else if (numero === 0) {
    resultado = "nulo";
  } else {
    resultado = "no es un número";
  }
  return resultado;
}


let verificar = (numero) => {
    if (numero > 0) {
      resultado = "positivo";
    } else if (numero < 0) {
      resultado = "negativo";
    } else if (numero === 0) {
      resultado = "nulo";
    } else {
      resultado = "no es un número";
    }
    return resultado;
}

