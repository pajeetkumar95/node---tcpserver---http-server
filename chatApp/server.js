import net from 'net'

const sockets = []

function publish(data){
    sockets.forEach(socket => socket.write(data))
}

const server = net.createServer((socket) => {
    // console.log(socket)
    sockets.push(socket)


    socket.on('data', (data) => {
        publish(data)
    })

    socket.on("error", () => {
        console.log("Connection Terminated from Client")
    })
})

server.listen(3000, () =>{
    console.log("Connected to server at port 3000")
})