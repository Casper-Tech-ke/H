const mysql = require('mysql2/promise');
const dbConfig = require('./SQLcreds');

const hasDbConfig = !!(
    dbConfig.host &&
    dbConfig.user &&
    dbConfig.database
);

const pool = hasDbConfig
    ? mysql.createPool(dbConfig)
    : {
        async query() {
            throw new Error('Database is not configured yet. Please complete the installation setup at /install.');
        },
        async getConnection() {
            throw new Error('Database is not configured yet. Please complete the installation setup at /install.');
        },
        async end() {
            return;
        },
    };

module.exports = pool;