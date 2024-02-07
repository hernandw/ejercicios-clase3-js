const nums = [0, 1, 2, 5, 10];


function suma (nums) {
 // La Recursión se detiene cuando un array está vacío
 if (nums.length < 1) { // con el length se mide la cantidad de espacios que tiene la variable nums
 return 0;
 }
 // El método shift() remueve el primer elemento del array
 // y retorna ese valor. Este método cambia la longitud del array
 var valor = nums.shift();
 // retornando en cada pasada la suma de los primeros valores que se van removiendo
 return valor + suma(nums);
}
console.log(suma(nums))
