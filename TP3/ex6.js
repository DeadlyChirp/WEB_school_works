const express = require('express')
const app = express()

app.get('/', function (req, res) {
    console.log('sending infos')
    res.send('Hello World!')
}