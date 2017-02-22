const db = require('../config/db')
// 引入表结构
const productModel = '../schema/products.js'
// 引入数据库
const ShoppingDb = db.Shopping
// 用sequelize的import方法引入表结构 实例化 product
const Product = ShoppingDb.import(productModel)

// 根据某个id 去查询特定的商品
const getProductById = async (id) => {
	const prodInfo = await Product.findOne({
		where: {
			id: id
		}
	})
	return prodInfo
}

// 查询所有的商品
const getAllProd = async () => {
	const allProd = await Product.findAll()
	return allProd
}

// 根据id 删除某个产品
const deleteProdById = async (id) => {
	await Product.destroy({
		where: {
			id: id
		}
	})
}

// 添加一条数据
const addProd = async (data) => {
	await Product.create({
		prod_name: data.name,
		price: data.price,
		description: data.description
	})
}

// 根据id 更新相应产品的数据
const updateProd = async (data) => {
	await Product.update(
		{
			prod_name: data.name,
			price: data.price,
			description: data.description
		},
		{
			where: { id: data.id }
		}
	)
}

module.exports = {
	getProductById,
	getAllProd,
	deleteProdById,
	addProd,
	updateProd
}


