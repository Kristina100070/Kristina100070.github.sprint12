const path = require('path');
const fs = require('fs');

const pathCards = path.join(__dirname, '../data/cards.json');
const pathUsers = path.join(__dirname, '../data/users.json');
const getCardsMiddleware = (req, res, next) => {
  // eslint-disable-next-line consistent-return
  fs.readFile(pathCards, { encoding: 'utf8' }, (err, cards) => {
    try {
      req.cards = JSON.parse(cards);
      next();
    // eslint-disable-next-line no-shadow
    } catch (err) {
      res.status(500).send('Cards is not found');
    }
  });
};

const getUsersMiddleware = (req, res, next) => {
  // eslint-disable-next-line consistent-return
  fs.readFile(pathUsers, { encoding: 'utf8' }, (err, users) => {
    try {
      req.users = JSON.parse(users);
      next();
    // eslint-disable-next-line no-shadow
    } catch (err) {
      res.status(500).send('Users is not found');
    }
  });
};
module.exports = { getCardsMiddleware, getUsersMiddleware };
