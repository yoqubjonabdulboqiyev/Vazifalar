const items = require('../models/items')

const find = async(req, res)=>{
    const data = await items.find().sort({name:'asc'})
    res.send({message: 'success', data})
}

const cost = async(req, res)=>{
    const {cost} = req.query;
    const data = await items.find({cost});
    res.send({message: 'success', data})
}
module.exports = {
    find,
    cost
}