const {Router} = require("express");
const { fetch } = require("../pg/connnect");

const router = Router()
router.get("/bloggers", async(req, res)=>{
    const data = await fetch("SELECT * from bloggers");
    res.send({message:"Succes", data})
})

router.post("/bloggers", async(req, res)=>{
    const {name, ending_date, promocode} = req.body
    console.log(name, ending_date)
   

    if(name == undefined || ending_date == undefined)
    return res.status(403).send({message:'name or time is not exsist'})
    const data  =  await fetch('INSERT into bloggers(name, ending_date, promocode) VALUES($1,$2,$3) returning*;', name, ending_date, promocode)
    res.send({message:"Succes", data})
})



module.exports = router;
