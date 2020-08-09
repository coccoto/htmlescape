const EscapeModel = require(ROOT + '/models/escapeModel')

module.exports = (req, res) => {
    const setHeader = () => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    }

    const escape = () => {
        const source = req.body.source

        console.log('source: ' + source)

        return EscapeModel(source)
    }

    const main = () => {
        setHeader()
        const result = escape()

        console.log('result: ' + result)

        res.json({ source: result })
    }
    return main()
}