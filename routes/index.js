const express = require('express')
const router = express.Router()

router.post('*', (req, res) => {
    const source = escape(req.body.source)
    res.send(source)
    console.log('complete')
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