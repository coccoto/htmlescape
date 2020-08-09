const IndexController = require(ROOT + '/contollers/indexController')

module.exports = (app) => {
    app.route('/').post((req, res) => {
        record()
        IndexController(req, res)
        return
    })
}

const record = () => {
    const date = new Date()

    const year = date.getFullYear()
    const month = String(date.getMonth()).padStart(2, '0')
    const nowDate = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')

    console.log(year + '-' + month + '-' + nowDate + ' ' + hours + ':' + minutes)
}