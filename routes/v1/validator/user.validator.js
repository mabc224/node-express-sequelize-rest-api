const Joi = require('joi');

module.exports = {
  createUser: {
    body: {
      email: Joi.string().min(1).max(32).required(),
      password: Joi.string().min(6).max(32).required(),
    },
  },
  idCheck: {
    params: {
      id: Joi.string().required(),
    },
  },
  updateUser: {
    body: {
      email: Joi.string().min(1).max(32).required(),
    },
  },
};
