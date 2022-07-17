const EscapeController = require(ROOT + '/src/contollers/escapeController')

module.exports = (app) => {
    app.route('/api/escape').post((req, res) => {
        EscapeController(req, res)
        return
    })
}