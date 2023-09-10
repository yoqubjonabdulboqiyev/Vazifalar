const {get, add} = require('../controllers/items.controller');

const router = require('express').Router()

router.get('/get', get)
router.post('/add', add)
module.exports = router;

