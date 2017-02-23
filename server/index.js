let express = require('express');
let fs = require('fs');
let app = express();
let upload = require('./upload.js');
let formidable = require('express-formidable');
app.use(formidable({
  uploadDir: 'public'
}));

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => console.log('Server started'));

app.post('/upload', (req, res) => {
  let {path} = req.files.avatar;
  console.log(path);
  fs.rename(path, path + '.jpg', err => {
      res.send('');
  });
});


app.get('/', (req, res) => {
  fs.readdir('./public', (err, files) => {
    res.send(files.join('\n'));
  });
})
