import net from 'net'

const server = net.createServer((socket) => {
    console.log("Connected to server")

    socket.on('data', (data) => {
        console.log("Data received: " + data);
        socket.write("Good to know you client")
    })
})

server.listen(3000, () => {
    console.log("Server started at port 3000")
})