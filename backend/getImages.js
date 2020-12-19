const fs = require('fs');

const dir = './uploads/';

function getImages(req, res) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      res.status(500).send('Error on reading files');
    } else {
      const data = [];
      files.forEach(file => {
        data.push(file);
      });
      res.status(200).json(data)
    }
  })
};

module.exports = getImages;