
const Sequelize = require('sequelize');

require('dotenv').config();

//Cria uma instância Sequelize ***(guiaperguntas = nome databela mysql)***

const connection = new Sequelize('requerimentos',process.env.USER_ROOT,process.env.KEY_DATABASE,{
    host: process.env.HOST,
    dialect: 'mysql'
});

module.exports = connection;