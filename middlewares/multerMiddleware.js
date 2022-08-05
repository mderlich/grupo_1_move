
const path = require('path');


//Multer : si quiero procesar archivos que viajen a traves de un formulario
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images');
  },
  filename: (req, file, cb) => {
    let fileName = Date.now() + "_img" + path.extname(file.originalname); 
    cb(null, fileName);
  }
});

const upload = multer({ storage: storage});


module.exports = upload;