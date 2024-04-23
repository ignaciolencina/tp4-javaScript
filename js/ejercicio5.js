// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
  constructor(nombre, edad, sexo, peso, altura, añoDeNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = this.generarDNI();
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoDeNacimiento = añoDeNacimiento;
  }

  mostrarGeneracion() {
    let añoDeNacimiento = 0;

    if (this.añoDeNacimiento >= 1930 && this.añoDeNacimiento <= 1948) {
      console.log(
        "Usted pertenece a la Silent Generation siendo sumamente maric#n"
      );
    } else if (this.añoDeNacimiento >= 1949 && this.añoDeNacimiento <= 1968) {
      console.log(
        "Usted pertenece a la Baby Boom Generation siendo un ambicioso de mie#da"
      );
    } else if (this.añoDeNacimiento >= 1969 && this.añoDeNacimiento <= 1980) {
      console.log(
        "Usted pertenece a la Generación X teniendo una obesesión inexplicable con el exito"
      );
    } else if (this.añoDeNacimiento >= 1981 && this.añoDeNacimiento <= 1993) {
      console.log("Usted pertenece a la Generación Y siendo un pobre fustrado");
    } else if (this.añoDeNacimiento >= 1994 && this.añoDeNacimiento <= 2010) {
      console.log(
        "Usted pertenece a la Generación Z siendo un rebelde terrible"
      );
    } else {
      console.log(
        "Felicidades! O estas muerto o sos lo suficientemenete joven para no entender un carajo!"
      );
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      console.log("Usted es mayor de edad");
    } else {
      console.log("Usted es menor de edad");
    }
  }

  mostrarDatos() {
    console.log(
      `Nombre: ${this.nombre} \n Edad: ${this.edad} \n DNI: ${this.dni} \n Sexo: ${this.sexo} \n Peso: ${this.peso} kg \n Altura: ${this.altura} cm \n Año de Nacimiento: ${this.añoDeNacimiento}`
    );
  }

  generarDNI() {
    console.log("Tu nuevo DNI es:" + (Math.floor(Math.random() * 90000000) + 10000000));
  }
}

let datos = [];

for (let i = 0; i < 1; i++) {
  let nombre = prompt("Ingrese su nombre:");
  let edad = prompt("Ingrese su edad:");
  let sexo = prompt("Ingrese H para hombre y M para mujer:");
  let peso = prompt("Ingrese su peso expresado en kg:");
  let altura = prompt("Ingrese su altura expresada en cm:");
  let añoDeNacimiento = prompt("Ingrese su año de nacimiento:");

  let ingreso = new Persona(nombre, edad, sexo, peso, altura, añoDeNacimiento);
  datos.push(ingreso);
}

console.log("Datos de la persona:");
datos.forEach((ingreso) => {
  ingreso.mostrarDatos();
  ingreso.mostrarGeneracion();
  ingreso.esMayorDeEdad();
});
