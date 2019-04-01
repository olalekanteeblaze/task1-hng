const http = require('http')

const server = http.createServer((req,res) => {
    res.end("Hello Word\n")
})

server.listen(8080, () => {
    console.log("Server is running")
})
