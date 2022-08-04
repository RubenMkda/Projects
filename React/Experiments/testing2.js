// class Punto {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static distancia(a, b) {
//     const dx = a.x - b.x;
//     const dy = b.x - b.y;

//     return Math.sqrt(dx * dx + dy * dy);
//   }
// }

// const p1 = new Punto(6, 6);
// const p2 = new Punto(10, 10);

// console.log(Punto.distancia(p1, p2));

// class Animal {
//   hablar() {
//     return this;
//   }
//   static comer() {
//     return this;
//   }
// }

// function Animal() {}

// Animal.prototype.hablar = function () {
//   return this;
// };

// Animal.comer = function () {
//   return this;
// };

// let obj = new Animal();
// let hablar = obj.hablar;
// hablar(); // global object

// hablar = Animal.hablar;

// class Animal {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }

//   hablar() {
//     console.log(this.nombre + " hacen un ruido");
//   }
// }

// class Perro extends Animal {
//   hablar() {
//     console.log(this.nombre + " ladra.");
//   }
// }

// const Doramato = new Perro("Doramato");

// Doramato.hablar();

// function Animal(nombre) {
//   this.nombre = nombre;
// }
// Animal.prototype.hablar = function () {
//   console.log(this.nombre + "hace un ruido");
// };

// class Perro extends Animal {
//   hablar() {
//     super.hablar();
//     console.log(this.nombre + " ladra.");
//   }
// }

// var p = new Perro("bethoven");
// p.hablar();

// var Animal = {
//   hablar() {
//     console.log(this.nombre + " hace un ruido.");
//   },
//   comer() {
//     console.log(this.nombre + " se alimenta");
//   },
// };

// class Perro {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }
//   hablar() {
//     console.log(this.nombre + " ladra.");
//   }
// }

// // Solo adjunta los métodos apun no definidos
// Object.setPrototypeOf(Perro.prototype, Animal);

// var d = new Perro("Putita");
// d.hablar();
// d.comer();
