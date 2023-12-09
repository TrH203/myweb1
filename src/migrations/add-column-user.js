// Adding a column for user
// queryInterface.addColumn('Person', 'petName', { type: DataTypes.STRING });
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.addColumn('Users', 'address',{
        type: Sequelize.STRING
      });
      await queryInterface.addColumn('Users', 'roleId',{
        type: Sequelize.STRING
      });

    },
    async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('Users');
    }
  };