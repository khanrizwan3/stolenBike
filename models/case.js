'use strict';
module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define('Case', {
    title: DataTypes.STRING,
    long_detail: DataTypes.STRING,
    location: DataTypes.STRING,
    time_of_theft: DataTypes.STRING,
    victim_id: DataTypes.INTEGER,
    officer_id: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {});
  // eslint-disable-next-line no-unused-vars
  Case.associate = function(models) {
    // associations can be defined here
  };
  return Case;
};