const prods = require('../controllers/products')
const router = require('koa-router')()

prods.api(router)
module.exports = router
