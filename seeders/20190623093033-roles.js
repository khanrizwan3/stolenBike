'use strict';

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('roles', [
      {
        role_name: 'admin',
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        role_name: 'victim',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        role_name: 'crimnal',
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        role_name: 'officer',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {});

  },

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
