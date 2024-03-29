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

/**
 * header option
 */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://www.coccoto.com')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

Router(app)
module.exports = app