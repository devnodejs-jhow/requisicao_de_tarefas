
const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define('ajustes',{
    machine:{
        type: Sequelize.STRING,
        allowNull: true
    },
    pos:{
        type: Sequelize.STRING,
        allowNull: true
    },
    automation:{
        type: Sequelize.STRING,
        allowNull: true
    },
    Os:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    tipo:{
        type: Sequelize.STRING,
        allowNull:false
    }
});

Pergunta.sync({force: false}).then(() => {});
module.exports = Pergunta;