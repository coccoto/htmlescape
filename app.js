const Express = require('express')

/**
 * routes setup
 */
const Router = require(ROOT + '/routes/index')

const app = Express()

/**
 * request option
 */
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

Router(app)

module.exports = app