const prods = require('../model/products')

const getProdInfo = async (ctx, next) => {
  const id = ctx.params.id
  const result = await prods.getProductById(id)
  ctx.body = result
}

const getAllProdInfo = async (ctx, next) => {  
  const result =  await prods.getAllProd()
  ctx.body = {
    success: true,
    status: 200,
    result: result
  }
}

const deleteProdInfo = async (ctx, next) => {
  const id = ctx.params.id
  await prods.deleteProdById(id)
  ctx.body = {
    success: true,
    status: 200
  }
}



const addProdInfo = async (ctx, next) => {
  const data = ctx.request.body
  const result = await prods.addProd(data)
  ctx.body = {
    success: true,
    status: 200
  }
}

const updateProdInfo = async (ctx, next) => {  
  const data = ctx.request.body
  const result = await prods.updateProd(data)
  ctx.body = {
    success: true,
    status: 200
  }
}

module.exports = {
  api: (router) => {
    router.get('/prod/:id', getProdInfo)
    router.get('/prods', getAllProdInfo)
    router.del('/prod/:id', deleteProdInfo),
    router.post('/prod/add', addProdInfo)
    router.put('/prod/update', updateProdInfo)
  }
}
