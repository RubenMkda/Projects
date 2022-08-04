// var numbers = [1, 5, 10, 15];
// var doubles = numbers.map(function (x) {
//   return x * 2;
// });

// console.log(doubles);

// numbers = [1, 4, 9];
// var roots = numbers.map(function (num) {
//   return Math.sqrt(num);
// });

// console.log(roots);

// var kvArray = [
//   { clave: 1, valor: 10 },
//   { clave: 2, valor: 20 },
//   { clave: 3, valor: 30 },
// ];

// var reformattedArray = kvArray.map(function (obj) {
//   var rObj = {};

//   rObj[obj.clave] = obj.valor;
//   return rObj;
// });

// console.log(reformattedArray);

// var map = Array.prototype.map;
// var valores = map.call("Hello Wordl", function (char) {
//   return char.charCodeAt(0);
// });

// console.log(map);

// var str = "1235";

// var R = [].map
//   .call(str, function (x) {
//     return x;
//   })
//   .reverse()
//   .join("-");

// console.log(R);

// class Gato {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }

//   hablar() {
//     console.log(this.nombre + " hace ruido.");
//   }
// }

// class Leon extends Gato {
//   hablar() {
//     super.hablar();
//     console.log(this.nombre + " maulla.");
//   }
// }

// var Morgana = new Leon("Morgana");

// Morgana.hablar();

var calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

var randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };
