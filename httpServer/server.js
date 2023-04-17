import http, { Server } from 'http'

const formData = []

const server = http.createServer((request, response) => {
    // response.setHeader("Content-type", "text/plain")

    if (request.method === "POST") {
        let body = []
        request.on('data', (data) => {
            body.push(data.toString())
            console.log(body[1])
        })
    }

    response.writeHead(200, { "Content-type": "application/json" })
    response.write("Connected to server");
    response.end()

})

server.listen(3000, () => {
    console.log("Server started at port 3000")
})