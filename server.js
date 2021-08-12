var path = require('path')
var serverStatic = require('server-static')

var app = express()
app.use(serverStatic(path.join(__dirname, 'dist')))
var port = process.env.PORT || 8000
app.listen(port)
console.log('server started' + port)