var express = require("express");
var router = express.Router();
var usuarioController = require("../../controllers/api/usuarioControllerAPI");

router.get("/", usuarioController.usuario_list);
router.post("/create", usuarioController.usuario_create);
router.delete("/delete", usuarioController.usuario_delete);
router.post("/update", usuarioController.usuario_update);

module.exports = router;
