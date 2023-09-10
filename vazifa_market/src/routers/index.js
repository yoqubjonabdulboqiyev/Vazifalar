const workerRouter = require("./router.workers")
const productRouter = require("./router.products")
module.exports = [
    workerRouter,
    productRouter,
]