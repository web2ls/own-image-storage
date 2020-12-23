function checkAuthUser(req, res, next) {
  console.log('Middaleware is here');
  const userKey = req.header('User-Key');
  console.log(userKey);
  console.log(process.env.SECRET_KEY);
  if (userKey === process.env.SECRET_KEY) {
    next();
  } else {
    res.status(401).send('User not authorized');
  }
};

module.exports = checkAuthUser;