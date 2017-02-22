const prods = require('../model/products')

const getProdInfo = async (ctx, next) => {
  console.log(ctx)
  const id = ctx.params.id
  const result = await prods.getProductById(id)
  ctx.body = result
}

module.exports = {
  api: (router) => {
    router.get('/prod/:id', getProdInfo)
  }
}
