'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Data', [{
     name: "qweqwe",
     description: "qweqwe",
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
      name: "asdasd",
      description: "asdasd",
      createdAt: new Date(),
      updatedAt: new Date()
   }], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Data', null, {})
  }
};
