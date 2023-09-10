const items = require('../models/items')

const get = async(req,res)=>{
    try {
        data = await items.find()
        res.send({message: 'success', data})
        
    } catch (error) {
        console.log(error)
    }
}


const add = async(req,res)=>{
    try {
        const {cost, value, name} = req.body
        console.log(cost, value, name)

        data = await items.create({cost , value, name})
        res.send({message:'Success', data})

        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    get,
    add
}