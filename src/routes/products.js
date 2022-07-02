
const express = require("express");
const router = express.Router();

const productController = require("../controllers/productos");

router.get("/", productController.listar);

router.get("/lista", productController.vistaListado);

router.get("/:id", productController.obtenerPorId);

router.post("/", productController.agregarProducto);

router.delete("/:id", productController.borrarProducto);

module.exports = router;

/*
1. /products (GET)
Listado de productos
2. /products/create (GET)
Formulario de creación de productos
3. /products/:id (GET)
Detalle de un producto particular
4. /products (POST)
Acción de creación (a donde se envía el formulario)
5. /products/:id/edit (GET)
Formulario de edición de productos
6. /products/:id (PUT)
Acción de edición (a donde se envía el formulario):
7. /products/:id (DELETE)
Acción de borrado
*/