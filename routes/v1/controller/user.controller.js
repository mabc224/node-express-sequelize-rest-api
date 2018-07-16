const bcrypt = require('bcryptjs');

const { User } = require('../../../models');

async function createUser(req, res, next) {
  try {
    const { email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const userCreated = await User.create({ email, password: hash });

    return res.status(201).json(userCreated);
  } catch (err) {
    return next(err);
  }
}

async function getUser(req, res, next) {
  try {
    const fetchUser = await User.find({
      where: {
        id: parseInt(req.params.id, 10),
      },
    });
    if (!fetchUser) {
      return res.status(404).send({ error: 'No user found' });
    }
    return res.status(200).json(fetchUser);
  } catch (err) {
    return next(err);
  }
}

function updateUser(req, res, next) {
  try {
    return User.update(
      { email: req.body.email },
      {
        where: { id: parseInt(req.params.id, 10) },
      },
    )
      .then((updatedUser) => {
        if (!updatedUser) {
          return res.status(404).send({
            message: 'User not found to update',
          });
        }
        return User.find({
          where: {
            id: parseInt(req.params.id, 10),
          },
        });
      }).then(user => res.status(200).json(user));
  } catch (err) {
    return next(err);
  }
}

async function deleteUser(req, res, next) {
  try {
    const fetchUser = await User.find({
      where: {
        id: parseInt(req.params.id, 10),
      },
    });
    if (!fetchUser) {
      return res.status(404).send({ error: 'No user found' });
    }
    await User.destroy({
      where: {
        id: parseInt(req.params.id, 10),
      },
    });
    return res.status(204).json({});
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
