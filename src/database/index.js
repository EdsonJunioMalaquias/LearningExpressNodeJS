const Sequelize = require('sequelize');
const dbConfig = require('../config/database').default;

const connection = new Sequelize(dbConfig);

module.exports =connection;