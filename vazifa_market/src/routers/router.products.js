const {Router} = require("express")
const { getAll, add, sell, addMahsulot } = require("../controllers/controller.product")

const router = Router()

router.get("/products",getAll );
router.post("/product/add",add)
router.put("/product/sell",sell)
router.put("/product/addMahsulot",addMahsulot)


module.exports = router