const Sequelize = require('sequelize');
const databaseName = "d120k3mm41s8hc";

console.log('Opening database connection');

//The location of the database we are storing our information: postgres://localhost:5432/crudApp
const db = new Sequelize(databaseName, 'trouwzpqbrezlh', 'ed597484b942671c927cbbc7c5cdff9696f9c7739a1958faa8c1b09d25f8e7a4', {
    host: 'ec2-184-73-192-251.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    },
    define: {
        timestamps: false
    },
    logging: false
  });

module.exports = db;