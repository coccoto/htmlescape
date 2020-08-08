const EscapeModel = require(ROOT + '/models/escapeModel')

module.exports = (req, res) => {
    const header = () => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    }

    const escape = () => {
        return EscapeModel(req.body.source)
    }

    const main = () => {
        const result = escape()
        header()
        res.send(result)
    }
    return main()
}