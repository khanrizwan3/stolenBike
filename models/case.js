'use strict';
module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define('Case', {
    title: DataTypes.STRING,
    long_detail: DataTypes.STRING,
    location: DataTypes.STRING,
    time_of_theft: DataTypes.STRING,
    victim_id: DataTypes.INTEGER,
    officer_id: {
      type: DataTypes.INTEGER,
      validate: {
        isUnique: function (value, next) {
          if (value) {
            Case.findOne({ where: { officer_id: value }})
              .then(function (data) {
                if (data) {
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
    status: DataTypes.INTEGER,
    status_reason: DataTypes.STRING,
  }, {});
  // eslint-disable-next-line no-unused-vars
  Case.associate = function(models) {
    // associations can be defined here
    Case.belongsTo(models.User, {
      foreignKey: {
        name: 'officer_id',
      }
    });
    
  };
  return Case;
};