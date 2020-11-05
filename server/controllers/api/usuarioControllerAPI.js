var Usuario = require("../../models/usuario");

exports.usuario_list = function (req, res) {
  res.status(200).json({
    usuarios: Usuario.lista,
  });
};

exports.usuario_create = function (req, res) {
  var us = new Usuario(
    req.body.id,
    req.body.nombre,
    req.body.apellido,
    req.body.nombreUsuario
  );
  Usuario.add(us);
  res.status(200).json({ usuario: us });
};

exports.usuario_delete = function (req, res) {
  Usuario.removeById(req.body.id);
  res.status(204).send();
};

exports.usuario_update = function (req, res) {
  var us = Usuario.findById(req.body.id);
  us.nombre = req.body.nombre;
  us.apellido = req.body.apellido;
  us.nombreUsuario = req.body.nombreUsuario;
  res.status(200).json({ usuario: us });
};
