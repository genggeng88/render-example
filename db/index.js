const pgp = require('pg-promise')();
const connection = pgp(process.env.DATABASE_URL);
// const databaseConfig= { 
//     type: "postgres", 
//     host: "localhost", 
//     port: 5432, 
//     username: "qingeng", 
//     password: "qin", 
//     database: "DATABASE_667",
// };

// const connection = pgp(databaseConfig);
module.exports = connection;