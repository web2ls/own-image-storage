const fs = require('fs');

const folder = './uploads';

function checkFileExists(pathToFile) {
  return new Promise((resolve, reject) => {
    fs.access(pathToFile, fs.F_OK, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    })
  })
};

function deleteFile(pathToFile) {
  return new Promise((resolve, reject) => {
    fs.unlink(pathToFile, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    })
  })
};

async function deleteImageHandler(req, res) {
  const pathToFile = `${folder}/${req.params.id}`;
  try {
    await checkFileExists(pathToFile);
    await deleteFile(pathToFile);

    res.status(200).send('Image has been deleted');
  } catch (err) {
    if (err.message.includes('no such file or directory')) {
      res.status(404).send('Image not found');
    } else
      res.status(500).send('Error on deleting image');
  }

};

module.exports = deleteImageHandler;