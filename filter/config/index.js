require('dotenv/config')

const {env} = process

config ={
    port : env.PORT,
    mongoDB : env.mongoDB
}

module.exports = config;