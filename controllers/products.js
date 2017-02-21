const prods = require('../model/products')

const getProdInfo = function* () {
  const id = this.params.id
  const result = yield prods.getProductById(id)
  this.body = result
}

module.exports = {
  api: (router) => {
    router.get('/prod/:id', getProdInfo)
  }
}
