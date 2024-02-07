// funciones recursivas: se llaman a ellas mismas. deben un elemento base

//imprime los numeros en descendente del 5 al 1

/* function imprimir(numero) {
    
    if (numero >= 1) {
        console.log(numero)
        numero -= 1
        imprimir(numero)
    } else {
        console.log('He terminado')
    }

}

imprimir(10) */

function imprimir(num) {
  // definir la base
  if (num == 1) {
    document.write(num + "<br>");
  } else {
    document.write(num + "<br>");
    imprimir(num - 1);
  }
}

imprimir(15);

//

