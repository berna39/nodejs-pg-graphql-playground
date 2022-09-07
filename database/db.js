const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const connectionInfo = {
    host: process.env.HOST,
    user: process.env.USERDB,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DB,
    max: process.env.MAX,
};

console.log(connectionInfo);

const pool = new Pool(connectionInfo);
pool.connect();

exports.findAllCountries = async () => {
    const {rows} = await pool.query("SELECT * FROM country");
    return rows
}