var Usuario = function (id, nombre, apellido, nombreUsuario) {
  this.id = id;
  this.nombre = nombre;
  this.apellido = apellido;
  this.nombreUsuario = nombreUsuario;
};

Usuario.lista = [];

Usuario.add = function (us) {
  Usuario.lista.push(us);
};
Usuario.findById = function (userId) {
  var us = Usuario.lista.find((x) => x.id == userId);
  if (us) return us;
  else throw new Error("No existe el usuario con id " + userId);
};

Usuario.removeById = function (userId) {
  for (var i = 0; i < Usuario.lista.length; i++) {
    if (Usuario.lista[i].id == userId) {
      Usuario.lista.splice(i, 1);
      break;
    }
  }
};

var a = new Usuario(1, "mlt", "srg", "mlt_srg");
var b = new Usuario(1, "some", "user", "resu");

Usuario.add(a);
Usuario.add(b);

module.exports = Usuario;
