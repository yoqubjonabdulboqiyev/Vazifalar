const express = require("express")
const app = express()


const config = require('../config')
const knex = require("../database")
const router = require("./routers")


    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use("/api", router)

app.listen(config.port, ()=>{
    console.log(`server is listening on ${config.port} port`)
})
