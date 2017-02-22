const prods = require('../model/products')

const getProdInfo = async (ctx, next) => {
  const id = ctx.params.id
  const result = await prods.getProductById(id)
  ctx.body = result
}

const getAllProdInfo = async (ctx, next) => {
  const result =  await prods.getAllProd()
  ctx.body = result
}

module.exports = {
  api: (router) => {
    router.get('/prod/:id', getProdInfo)
    router.get('/prods', getAllProdInfo)
  }
}
