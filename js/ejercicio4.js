// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimirDatos() {
    console.log(
      `Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`
    );
  }
}

let productos = [];

for (let i = 0; i < 3; i++) {
  let codigo = prompt("Ingrese el código del producto:");
  let nombre = prompt("Ingrese el nombre del producto:");
  let precio = prompt("Ingrese el precio del producto:");

  let producto = new Producto(codigo, nombre, precio);
  productos.push(producto);
}

console.log("Datos de los productos:");
productos.forEach((producto) => {
  producto.imprimirDatos();
});
