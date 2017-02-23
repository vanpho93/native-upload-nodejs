let multer  = require('multer');

let storage = multer.diskStorage({
    destination(req, file, cb){
      cb(null, "uploads");
    },
    filename(req, file, cb){
      console.log(file);
      cb(null, Date.now() + file.originalname);
}});

var limit = {fileSize: 30*1024};

var upload = multer({ storage }).array("avatar");

module.exports = upload;
