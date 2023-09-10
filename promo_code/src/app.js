const { json } = require("express")
const express = require("express")
const app = express()

const { fetch } = require("./pg/connnect")
const router = require("./routers")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api', router)




app.listen(4000, ()=>{
    console.log("4000 port is listening . . .")
})