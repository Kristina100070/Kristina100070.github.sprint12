const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const pathCards = path.join(__dirname, '../../data/cards.json');

function getUsersMiddleware(req, res, next) {
  // eslint-disable-next-line consistent-return
  fs.readFile(pathCards, { encoding: 'utf8' }, (err, cards) => {
    try {
      req.cards = JSON.parse(cards);
      next();
    // eslint-disable-next-line no-shadow
    } catch (err) {
      res.status(500).send('Cards is not found');
      return next(true);
    }
  });
}

router.get('/', getUsersMiddleware, (req, res) => {
  res.status(200).send(req.cards);
});

router.get('/:id', getUsersMiddleware, (req, res) => {
  res.send(`get with id: ${req.params.id}`);
});

module.exports = router;
