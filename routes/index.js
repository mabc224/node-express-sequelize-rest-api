const express = require('express');

const router = express.Router();
const userRoutes = require('./v1/users');


router.get('/', (req, res) => res.status(200).send({
  error: false,
  message: 'Welcome to the beginning of user api.',
}));

router.use('/users', userRoutes);

module.exports = router;
