const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.static('public'));

app.get('/home', (req, res) => res.send('Hello user'));

app.listen(8000, () => {
  console.log('server has been started...')
})