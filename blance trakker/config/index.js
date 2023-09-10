require("dotenv/config")
const {env} = process

module.exports = {
    port: env.PORT,
}