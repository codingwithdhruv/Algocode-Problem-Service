const dotenv = require('dotenv'); //imports env module

dotenv.config(); // loads env variables from .env file

module.exports = {
    PORT: process.env.PORT || 3000,
    ATLAS_DB_URL: process.env.ATLAS_DB_URL
}