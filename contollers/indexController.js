const EscapeModel = require(ROOT + '/models/escapeModel')

module.exports = (req, res) => {
    const escape = () => {
        const source = req.body.source
        return EscapeModel(source)
    }

    const main = () => {
        const result = escape()
        res.json({ source: result })
    }
    return main()
}