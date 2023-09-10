const {Router} = require("express");
const { fetch } = require("../pg/connnect");

const router = Router()

router.get("/users", async(req, res)=>{
    const data = await fetch("SELECT * from users");
    res.send({message:"Succes", data})
})

router.post("/users", async(req, res)=>{
    const {name, last_name, blogger_promocode} = req.body
    if(name == undefined || last_name == undefined)
    return res.status(403).send({message:'name or time is not exsist'})

   const bloggers_promocode =await fetch("SELECT promocode FROM bloggers")
   const check_code =bloggers_promocode.filter((el) => el.promocode == blogger_promocode)

   const get_time = await fetch("SELECT creating_date, ending_date FROM bloggers where promocode = $1", blogger_promocode)
   const date =new Date().toISOString()

   const check_time = get_time[0].creating_date.toISOString() < date && get_time[0].ending_date.toISOString() > date
  console.log(check_code.length, check_time)
   if(check_code.length && check_time){
    let balance = await fetch('SELECT balance from bloggers where promocode = $1 ', blogger_promocode)
    balance[0].balance += 200000 *0.8
    const newblogger = await fetch("UPDATE bloggers set balance =$1 where promocode = $2",balance[0].balance , blogger_promocode)
   }

   
})

module.exports = router