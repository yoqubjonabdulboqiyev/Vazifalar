const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {
        type:String,
        required:true,
    },
    cost:{
        type:Number,
        required:true,
    },
    value:{
        type:Number,
        required:true,
    }
},
{
    timestamps:true
})

module.exports = model('items', schema)