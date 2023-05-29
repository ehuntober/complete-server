

const Products = require('./products')


module.exports = {
    listProducts
}

async function listProducts(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*')

    try{
        res.json(await Product.list())
    }

    catch(err){
        res.status(500).json({error: err.message})
    }

}