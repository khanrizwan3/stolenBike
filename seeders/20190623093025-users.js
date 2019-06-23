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
    return queryInterface.bulkInsert('users', [{
      firstname: 'John',
      lastname: 'Wick',
      email: 'jw@demo.com',
      dob: '2019-04-24',
      token:'',
      username:'jw',
      avatar:'',
      createdAt : new Date(),
      updatedAt : new Date(),
      password: 'demo123'
      //bcrypt.hashSync('demo123'),
      // later we can bycrypt library for encrypting 
    },{
      firstname: 'Abigail',
      lastname: 'Abraham',
      email: 'Abigail@demo.com',
      dob: '2019-04-24',
      token:'',
      username:'Abigail',
      avatar:'',
      createdAt : new Date(),
      updatedAt : new Date(),
      password: 'demo123' 
    },
    {
      firstname: 'Alexandra',
      lastname: 'Allan',
      email: 'Adrian@demo.com',
      dob: '2019-04-24',
      token:'',
      username:'Adrian',
      avatar:'',
      createdAt : new Date(),
      updatedAt : new Date(),
      password: 'demo123',
    },{      
      firstname: 'Bella',
      lastname: 'Cameron',
      email: 'bac@demo.com',
      dob: '2019-04-24',
      token:'',
      username:'bac',
      avatar:'',
      createdAt : new Date(),
      updatedAt : new Date(),
      password: 'demo123',
    },{      
      firstname: 'Dorothy',
      lastname: 'Ellison',
      email: 'dje@demo.com',
      dob: '2019-04-24',
      token:'',
      username:'dje',
      avatar:'',
      createdAt : new Date(),
      updatedAt : new Date(),
      password: 'demo123',
    },{      
      firstname: 'Lisa',
      lastname: 'Hemmings',
      email: 'lgh@demo.com',
      dob: '2019-04-24',
      token:'',
      username:'lgh',
      avatar:'',
      createdAt : new Date(),
      updatedAt : new Date(),
      password: 'demo123',
    },{      
      firstname: 'Caroline',
      lastname: 'Cecilia',
      email: 'chc@demo.com',
      dob: '2019-04-24',
      token:'',
      username:'chc',
      avatar:'',
      createdAt : new Date(),
      updatedAt : new Date(),
      password: 'demo123',
    },{      
      firstname: 'Dorothy',
      lastname: 'Halley',
      email: 'dhh@demo.com',
      dob: '2019-04-24',
      token:'',
      username:'dhh',
      avatar:'',
      createdAt : new Date(),
      updatedAt : new Date(),
      password: 'demo123',
    },{      
      firstname: 'Edwin',
      lastname: 'Hubble',
      email: 'eph@demo.com',
      dob: '2019-04-24',
      token:'',
      username:'eph',
      avatar:'',
      createdAt : new Date(),
      updatedAt : new Date(),
      password: 'demo123',
    },{      
      firstname: 'Frieda',
      lastname: 'Robbins',
      email: 'rbb@demo.com',
      dob: '2019-04-24',
      token:'',
      username:'rbb',
      avatar:'',
      createdAt : new Date(),
      updatedAt : new Date(),
      password: 'demo123',
    },{      
      firstname: 'Lene',
      lastname: 'Hau',
      email: 'lvh@demo.com',
      dob: '2019-04-24',
      token:'',
      username:'lvh',
      avatar:'',
      createdAt : new Date(),
      updatedAt : new Date(),
      password: 'demo123',
    },{      
      firstname: 'Patricia',
      lastname: 'Rakic',
      email: 'pgr@demo.com',
      dob: '2019-04-24',
      token:'',
      username:'pgr',
      avatar:'',
      createdAt : new Date(),
      updatedAt : new Date(),
      password: 'demo123',
    },{      
      firstname: 'Richard',
      lastname: 'Feynman',
      email: 'rpf@demo.com',
      dob: '2019-04-24',
      token:'',
      username:'rpf',
      avatar:'',
      createdAt : new Date(),
      updatedAt : new Date(),
      password: 'demo123',
    },{      
      firstname: 'Wilhelm',
      lastname: 'Roentgen',
      email: 'wcr@demo.com',
      dob: '2019-04-24',
      token:'',
      username:'wcr',
      avatar:'',
      createdAt : new Date(),
      updatedAt : new Date(),
      password: 'demo123',
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
