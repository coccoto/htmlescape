// RootPath setup
global.Root = __dirname

const express = require('express')
const path = require('path')

// routes require
const index = require(path.resolve(Root, 'routes', 'index'))

const app = express()

// request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes setup
app.use('*', index)

app.listen(3000, () => {
    console.log('server running')
})