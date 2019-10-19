const Sequalize = require('sequelize');
const db = require('../db');

const students = db.define("voters", {
    idNumber: {
        type: Sequalize.INTEGER,
        allowNull: false
    },
    email: {
        type: Sequalize.STRING,
        allowNull: false
    },
    firstName: {
        type: Sequalize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequalize.STRING,
        allowNull: false
    },
    img: {
        type: Sequalize.STRING,
        allowNull: true
    },
    pk: {
        type: Sequalize.STRING,
        allowNull: false
    },
    password: {
        type: Sequalize.STRING,
        allowNull: false
    }
});

module.exports = students;