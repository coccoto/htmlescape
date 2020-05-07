const express = require('express')
const router = express.Router()

router.get('*', (req, res) => {
    console.log('GET Request')
})

router.post('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    const source = escape(req.body.source)

    res.send(source)
})

const escape = (source) => {
    return source
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
}

module.exports = router