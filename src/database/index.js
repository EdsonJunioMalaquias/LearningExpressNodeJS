const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Funcionario = require('../models/funcionario');

const connection = new Sequelize(dbConfig);

Funcionario.init(connection);
module.exports =connection;