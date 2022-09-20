// ************ Require Settings ************
const path = require('path');
const multer = require('multer');

// ************ Multer Settings ************
// OBS! en el archivo de ruta se invoca...
// const uploadFile = require('../../middlewares/adminMulter');
// router.post('/', upload.single('image'), store);  
// -------------------------------------

const storage = multer.diskStorage({
  /* destination... indicamos la carpeta donde se van a guardar...  */
destination: (req, file, cb) => {
      let folder = path.join(__dirname, "../../public/images/products");
      cb(null, folder)
},
  /* filename... definimos el nombre del archivo */
filename: (req, file, cb) => {


      // Limpiamos el nombre que viene desde el formulario...
      // ej... "  your string 123 .-_!@  " => "YourString123"
      let abc = req.body.nombre;
      let abc2 = abc.replace(/\b\w/g, l => l.toUpperCase())
      let abc3 = abc2.replace(/[^a-zA-Z0-9]/g, "");

      // Datos propios del 'file' son...
      // fieldname / originalname / encoding / mimetype / destination / filename / path / size
      // en caso de requerir la fecha en milisegundos... Date.now()
      let nombreImagen = "zapatillas_" + abc3 + path.extname(file.originalname);
      cb(null, nombreImagen)
}
})

// se utiliza como middleware de la ruta POST que lo utilice
// router.post('/', upload.single('image'), store);  
let upload = multer({ storage })
// -------------------------------------


module.exports = upload;