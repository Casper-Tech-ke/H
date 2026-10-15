
const dbConfig = {
    host: process.env.DB_HOST && process.env.DB_HOST.trim() ? process.env.DB_HOST.trim() : undefined,
    user: process.env.DB_USER && process.env.DB_USER.trim() ? process.env.DB_USER.trim() : undefined,
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME && process.env.DB_NAME.trim() ? process.env.DB_NAME.trim() : undefined,
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

module.exports = dbConfig;