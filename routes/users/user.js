const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).send(req.users);
});

router.get('/:id', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const user = req.users.find((item) => item._id === req.params.id);
  if (user) {
    return res.status(200).send(user);
  }
  return res.status(404).json({ message: 'Нет пользователя с таким id' });
});

module.exports = router;
