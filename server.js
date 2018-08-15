var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

app = express()
app.use(serveStatic(__dirname + "/dist"))

var PORT = process.env.PORT || 3000
app.listen(PORT)

