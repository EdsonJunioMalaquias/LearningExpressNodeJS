'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('funcionario', {
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
      create_at :{
        type: Sequelize.DATE,
        allowNull :false,
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull:false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('funcionario');
  }
};
