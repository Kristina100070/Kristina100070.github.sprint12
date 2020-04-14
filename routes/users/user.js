const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const pathUsers = path.join(__dirname, '../../data/cards.json');

function getUsersMiddleware(req, res, next) {
  // eslint-disable-next-line consistent-return
  fs.readFile(pathUsers, { encoding: 'utf8' }, (err, users) => {
    try {
      req.users = JSON.parse(users);
      next();
    // eslint-disable-next-line no-shadow
    } catch (err) {
      res.status(500).send('Users is not found');
      return next(true);
    }
  });
}

router.get('/', getUsersMiddleware, (req, res) => {
  res.status(200).send(req.users);
});

router.get('/:id', getUsersMiddleware, (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const user = req.users.find((item) => item._id === req.params.id);
  if (user) {
    return res.status(200).send(user);
  }
  return res.status(404).json({ message: 'Нет пользователя с таким id' });
});

module.exports = router;
