const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const uploadHandler = require('./upload');

const PORT = process.env.PORT || 8000;

app.use(fileUpload({
  createParentPath: true
}));
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));

app.get('/home', (req, res) => res.send('Hello user'));
app.post('/upload', uploadHandler)

app.listen(PORT, () => {
  console.log('server has been started...')
})