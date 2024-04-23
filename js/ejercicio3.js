// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área.

class Rectangulo {
  constructor(alto, base) {
    this.alto = alto;
    this.base = base;
  }

  mostrarPropiedades() {
    console.log(
      `Este rectangulo tiene una altura de ${this.alto} cm y una base de ${this.base} cm.`
    );
  }
  modificarPropiedades(nuevoAlto, nuevaBase) {
    this.alto = nuevoAlto;
    this.base = nuevaBase;
  }

  calcularPerimetro() {
    return (this.alto + this.base) * 2;
  }

  calcularArea(area) {
    return this.alto * this.base;
  }
}

const rectangulo1 = new Rectangulo(0, 0);
const rectangulo2 = new Rectangulo(0, 0);
const rectangulo3 = new Rectangulo(0, 0);
const rectangulo4 = new Rectangulo(0, 0);
const rectangulo5 = new Rectangulo(0, 0);


const modAltura1 = parseInt(prompt("Ingrese la nueva altura del rectangulo:"))
const modBase1 = parseInt(prompt("Ingrese la nueva base del rectangulo:"))

rectangulo1.modificarPropiedades(modAltura1, modBase1)

rectangulo1.mostrarPropiedades();

const nuevoPerimetro = rectangulo1.calcularPerimetro();
const nuevaArea = rectangulo1.calcularArea();

console.log(`El perimetro de este rectangulo con los valores modificados es de: ${nuevoPerimetro} cm.`)
console.log(`El área de este rectangulo con los valores modificados es de: ${nuevaArea} cm².`)