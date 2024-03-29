const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const uploadHandler = require('./upload');
const getImages = require('./getImages');
const deleteImageHandler = require('./deleteImage');

require('dotenv').config();

// const corsOptions = {
//   origin: 'http://localhost:5173'
// }

const checkAuthUser = require('./middleware/auth');

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(checkAuthUser);
app.use(bodyParser.json());
app.use(fileUpload({
  createParentPath: true
}));
app.use(morgan('dev'));

app.get('/home', (req, res) => res.send('Hello user'));
app.get('/images', getImages);
app.post('/upload', uploadHandler);
app.delete('/images/:id', deleteImageHandler);

app.listen(PORT, () => {
  console.log('server has been started...')
})