const express = require('express')
const serveStatic = require('serve-static')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cors())


app.use('/', cors(), serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 3000
app.listen(port)

console.log('Server starting on port ' + port + ' ...')