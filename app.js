const app = require('koa')()
const router = require('koa-router')()
const json = require('koa-json')
const logger = require('koa-logger')
const api = require('./routes/api')

app.use(require('koa-bodyparser')())
app.use(json())
app.use(logger())

app.use(function* (next){
  let start = new Date
  yield next
  let ms = new Date - start
  console.log('%s %s - %s', this.method, this.url, ms)
})

app.on('error', function(err, ctx){
  console.log('server error', err)
})

router.use('/api', api.routes())
app.use(router.routes()) // 将路由规则挂载到Koa上。

app.listen(8889,() => {
  console.log('Koa is listening in 8889')
})

module.exports = app