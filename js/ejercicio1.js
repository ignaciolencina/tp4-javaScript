// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
  marca: "Honda",
  modelo: "Civic",
  año: 2020,
  color: "Rojo",
  kilometraje: 60000,
  caballos: 150,

  encender: function () {
    console.log("Auto encendido");
  },

  apagar: function () {
    console.log("Auto apagado");
  },
};

console.log(auto);
auto.encender();
// auto.apagar();
