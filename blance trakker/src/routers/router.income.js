const { Router } = require("express");
const Joi = require("joi");
const router  = Router()
const joi = require("joi")


const knex = require("../../database")


router.get("/income", async(req, res)=>{
    try {
        const data = await knex('income').select('*').returning('*')
        res.send({data})

    } catch (error) {
        console.log(error)
        
    }
    
})

router.post("/income", async(req, res)=>{
    
    try {
        const {income_name, amount_cash, descrioption} = req.body
        console.log(income_name, amount_cash, descrioption)
        const schema = joi.object({
            income_name: Joi.string().max(32).required(),
            amount_cash: Joi.number().required(),
            descrioption: Joi.string().max(1024)
        })
        
        const {error, value} = schema.validate({income_name: income_name, amount_cash:amount_cash, descrioption:descrioption})
        if(error)
        return res.status(401).send({message:error.message})


        

        const data = await knex('income').insert({income_name, amount_cash, descrioption}).returning('*')
        console.log(data[0].id)
        const history = await knex('history').insert({income_id:data[0].id, total_money:data[0].amount_cash}).returning('*')
        console.log(history)
        res.status(201).send({message:'succes', data})

    } catch (error) {
        console.log(error)
        
    }
    
})


module.exports = router;