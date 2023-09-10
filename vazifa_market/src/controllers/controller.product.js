const { fetch } = require("../pg")


const getAll = async(req, res)=>{
    const data = await fetch("SELECT * FROM product;");
    res.json({message: data});
}


const add = async(req, res)=>{
    const {name, kg, price} = req.body;
    console.log(name, kg, price)
    if( name == undefined || kg == undefined || price == undefined) 
    return res.status(401).json({message: "Please fill full data"})

    const data = await fetch(`INSERT into product(name, kg, price)
    VALUES
    ($1, $2, $3) returning*;`, name,kg, price );
    res.status(201).send({message:"success", data: data});


}


const sell = async(req, res)=>{
    const {name, kg} = req.body;
    console.log(name,kg)
    if( name == undefined || kg == undefined) 
    return res.status(401).json({message: "Please fill full data"})
    const changeKg = await fetch("SELECT kg from product where name = $1;", name)
    changeKg[0].kg
    let son =  changeKg[0].kg - kg
    if(son<=0)
    return res.send({message:"Dokonda boshqa mahsulot qoladi"})
    const data = await fetch(`UPDATE product set kg = $1 WHERE name = $2 
    returning*;`, son, name );
    res.status(201).send({message:"success", data: data});


}


const addMahsulot = async(req, res)=>{
    const {name, kg} = req.body;
    if( name == undefined || kg == undefined) 
    return res.status(401).json({message: "Please fill full data"})
    const changeKg = await fetch("SELECT kg from product where name = $1;", name)
    changeKg[0].kg
    let son =  changeKg[0].kg + kg
    const data = await fetch(`UPDATE product set kg = $1 WHERE name = $2 
    returning*;`, son, name );
    res.status(201).send({message:"success", data: data});


}

module.exports = {
    getAll,
    add,
    sell,
    addMahsulot,
}