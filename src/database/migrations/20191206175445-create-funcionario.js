'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('funcionarios', {
      id: {
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:Sequelize.INTEGER,
      },
      name:{
        type: Sequelize.STRING,
        allowNull : false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull : false,
      },
      createdAt :{
        type: Sequelize.DATE,
        allowNull :false,
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('funcionarios');
  }
};
