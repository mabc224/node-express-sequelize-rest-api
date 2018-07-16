const { User } = require('../../../models');

async function createUser(req, res, next) {
  try {
    const userCreated = await User.create(req.body);
    return res.status(201).json(userCreated);
  } catch (err) {
    return next(err);
  }
}

async function getUser(req, res, next) {
  try {
    const fetchUser = await User.findById(req.params.id);
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
    User.update(
      { email: req.body.email },
      { returning: true, where: { id: req.params.id } },
    )
      .then(([rowsUpdate, [updatedUser]]) => {
        if (!rowsUpdate) {
          return res.status(404).send({
            message: 'User not found to update',
          });
        }
        return res.status(200).json(updatedUser);
      });
  } catch (err) {
    return next(err);
  }
}

function deleteUser(req, res, next) {
  try {
    User.find({
      where: {
        id: req.params.id,
      },
    })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }

        return user
          .destroy()
          .then(() => res.status(204));
      });
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
