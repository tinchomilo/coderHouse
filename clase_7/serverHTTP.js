const http = require('http')

const server = http.createServer( (req, res) => {
    res.end('mi primer servidor en http')
} )


server.listen( 3000, () => console.log('server running in port 3000'))