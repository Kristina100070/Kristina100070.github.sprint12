const router = require('express').Router();
const users = require('./users/user.js');
const cards = require('./cards/cards.js');

const { getUsersMiddleware, getCardsMiddleware } = require('../middlewares');

router.use('/cards', getCardsMiddleware, cards);
router.use('/users', getUsersMiddleware, users);

module.exports = router;
