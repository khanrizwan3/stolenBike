'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    dob: DataTypes.STRING,
    token: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function (value, next) {
          if (value) {
            User
              .find({ where: { email: value }})
              .then(function (user) {
                if (user) {
                  next('Already taken');
                } else {
                  next();
                }
              })
              .error(function (err) {
                next(err.message);
              });
          } else {
            next('String is empty');
          }
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      required: true,
      allowedNull: false,
      validate: {
        len: {
          args: 3
        }
      }
    },
    username: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {});
  // eslint-disable-next-line no-unused-vars
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};