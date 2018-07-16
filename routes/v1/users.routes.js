const express = require('express');
const validate = require('express-validation');

const router = express.Router();
const userValidation = require('./validator/user.validator');
const userController = require('./controller/user.controller');


router.post(
  '/',
  validate(userValidation.createUser),
  userController.createUser,
);

router.get(
  '/:id',
  validate(userValidation.idCheck),
  userController.getUser,
);

router.put(
  '/:id',
  validate(userValidation.idCheck),
  validate(userValidation.updateUser),
  userController.updateUser,
);

router.delete(
  '/:id',
  validate(userValidation.idCheck),
  userController.deleteUser,
);


module.exports = router;
