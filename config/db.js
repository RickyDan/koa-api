const Sequelize = require('sequelize')

const Shopping = new Sequelize('mysql://root:19901112@localhost/shopping', {
  define: {
    timestamps: false
  }
})

module.exports = {
  Shopping
}
