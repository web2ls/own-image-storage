function checkAuthUser(req, res, next) {
  const userKey = req.header('User-Key');
  if (userKey === process.env.SECRET_KEY) {
    next();
  } else {
    res.status(401).send('User not authorized');
  }
};

module.exports = checkAuthUser;