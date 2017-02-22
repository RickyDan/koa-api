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

const deleteProdInfo = async (ctx, next) => {
  const id = ctx.params.id
  const result = await prods.deleteProdById(id)
  ctx.body = {
    success: true,
    status: 200
  }
}

module.exports = {
  api: (router) => {
    router.get('/prod/:id', getProdInfo)
    router.get('/prods', getAllProdInfo)
    router.del('/prod/:id', deleteProdInfo)
  }
}
