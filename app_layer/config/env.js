require('dotenv').config()

const config = {
  dev: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbhost: process.env.HOST_MONGO_DB || 'localhost',
  dbport: process.env.PORT_MONGO_DB || 27017,
  dbname: process.env.NAME_MONGO_DB || 'os_project'
}

module.exports = { config }
