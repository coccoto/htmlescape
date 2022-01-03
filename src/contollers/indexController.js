const EscapeModel = require(ROOT + '/src/models/escapeModel')

module.exports = (req, res) => {
    const escape = () => {
        console.log(req.body)
        const source = req.body.source
        return EscapeModel(source)
    }

    const main = () => {
        const result = escape()
        res.json({ source: result })
    }
    return main()
}