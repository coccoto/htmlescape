const IndexController = require(ROOT + '/src/contollers/indexController')

module.exports = (app) => {
    app.route('/').post((req, res) => {
        IndexController(req, res)
        return
    })
}