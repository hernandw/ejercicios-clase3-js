/* for (let i = 1; i < 10; i++) {
  if (i == 2) {
    break;
  }
  console.log(i);
} */


var impar = 0;
for (let i = 0; i <= 20; i++) {
 if (i == 10) {
 continue; // se ignora cualquier otro proceso
 };
 if (i == 19) {
 break; // se rompe el ciclo actual
 };
 if (i % 2 == 0) {
 document.write(i+"<br>");
 }else {
 impar++;
 };
};
document.write("La cantidad de números impares es: "+impar);


for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}

let num = 6

var res = 1;
for (let i = 1; i <= num; i++) {
  res = res * i;
}
console.log(res);




for (let i = 0; i < 5; i++) {
  console.log("i: " + i);
  for (let j = 0; j < 10; j++) {
    console.log("j: " + j);
  }
}