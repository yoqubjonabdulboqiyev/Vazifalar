const { find, cost } = require('../controllers/filter.controller');


const router = require('express').Router()

router.get('/filter', find)
router.get('/cost', cost)
module.exports = router;

