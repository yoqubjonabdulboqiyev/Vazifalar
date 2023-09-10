const { Router } = require("express");
const router  = Router()


const knex = require("../../database")


router.get("/history", async(req, res)=>{
    const data = await knex('history').select('*')
    res.status(200).send({message:data})

})


module.exports = router;