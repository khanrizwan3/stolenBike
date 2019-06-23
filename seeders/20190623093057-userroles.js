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
    return queryInterface.bulkInsert('userroles', [
    
      {
        user_id: 1,
        role_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        user_id: 2,
        role_id: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        user_id: 3,
        role_id: 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        user_id: 4,
        role_id: 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        user_id: 5,
        role_id: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        user_id: 6,
        role_id: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        user_id: 7,
        role_id: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        user_id: 8,
        role_id: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        user_id: 9,
        role_id: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        user_id: 10,
        role_id: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        user_id: 11,
        role_id: 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        user_id: 12,
        role_id: 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        user_id: 13,
        role_id: 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        user_id: 14,
        role_id: 4,
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
