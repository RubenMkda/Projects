/*Probando el parseInt

    Es un lector de cadena que dependiendo del sistema numerico usado(binario, decimal, hexadecimal, etc)
*/

// var ruben = parseInt("10", 10);

// console.log(ruben);

// let Rectangulo = class {
//   constructor(alto, ancho) {
//     this.alto = alto;
//     this.ancho = ancho;
//   }
// };

// console.log(Rectangulo.name);

// Rectangulo = class Rectangulo2 {
//   constructor(alto, ancho) {
//     this.alto = alto;
//     this.ancho = ancho;
//   }
// };
// console.log(Rectangulo.name);

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  //Getter
  get area() {
    return this.calcArea();
  }
  // Metodo
  calcArea() {
    return this.alto * this.ancho;
  }
}

const cuadrado = new Rectangulo(10, 10);

console.log(cuadrado.area);
