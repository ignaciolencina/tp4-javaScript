// Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

const cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function (agregarMonto) {
    this.saldo += agregarMonto;
  },

  extraer: function (extraerMonto) {
    this.saldo -= extraerMonto;
  },

  informar: function () {
    console.log("Titular: " + this.titular);
    console.log("Saldo actual: " + this.saldo);
  },
};

let agregarMonto = parseInt(prompt("Ingrese el monto que desee depositar:"));
let extraerMonto = parseInt(prompt("Ingrese el monto que desee extraer:"));

cuenta.ingresar(agregarMonto);

cuenta.extraer(extraerMonto);

cuenta.informar();

