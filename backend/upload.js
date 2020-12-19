function uploadHandler(req, res) {
  try {
    if (!req.files) {
      res.status(400).send({
        status: 400,
        message: 'No files for upload'
      });
      return;
    };

    const data = [];

    if (!Array.isArray(req.files.images)) {
      req.files.images.mv('./uploads/' + req.files.images.name);
      res.send({
        status: 200,
        message: 'Image has been uploaded',
        data: {
          name: req.files.images.name,
          mimetype: req.files.images.mimetype,
          size: req.files.images.size
        }
      });
      return;
    }

    req.files.images.forEach(image => {
      image.mv('./uploads/' + image.name);
      data.push({
        name: image.name,
        mimetype: image.mimetype,
        size: image.size
      });
    });

    res.send({
      status: 200,
      message: 'Images has been uploaded',
      data: data
    })
  } catch (error) {
    res.status(500).send('system error');
  }
};

module.exports = uploadHandler;