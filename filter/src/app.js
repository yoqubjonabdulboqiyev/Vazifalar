const express = require('express')
const app = express()
const config = require('../config')
const routers = require('./routers')
const {connect} = require('mongoose')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api', routers)

const bootstrap = async()=>{
    
   await connect(config.mongoDB)

   app.listen(config.port, ()=>{
    console.log(`server is listening on ${config.port} port`)
})
 
   
    
}

bootstrap()