const fs = require('fs');
const path = require('path');

const dir = './uploads/';

function getImages(req, res) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      res.status(500).send('Error on reading files');
    } else {
      const data = [];
      files.forEach(file => {
        const stats = fs.statSync(dir + file);
        const obj = {
          name: file,
          type: path.extname(file).split('.')[1],
          size: Math.round((stats.size) / 1024).toString() + ' KB',
          createdAt: stats.birthtime
        }
        data.push(obj);
      });
      res.status(200).json(data)
    }
  })
};

module.exports = getImages;