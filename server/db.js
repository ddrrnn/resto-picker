const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"rain51dbduran",
    host:"localhost",
    port: 5432,
    database:"restopicker"
});

module.exports = pool;
