const db = require('../config/db')
// 引入表结构
const productModel = '../schema/products.js'
// 引入数据库
const ShoppingDb = db.Shopping
// 用sequelize的import方法引入表结构 实例化 product
const Product = ShoppingDb.import(productModel)
const getProductById = function* (id) {
	const prodInfo = yield Product.findOne({
		where: {
			id: id
		}
	})
	return prodInfo
}

module.exports = {
	getProductById
}


