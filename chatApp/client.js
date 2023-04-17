import net from 'net'
import readline from 'readline'

const r1 = readline.createInterface(process.stdin, process.stdout)


const getName = new Promise((resolve, reject) => {
    r1.question("Enter your name\n", (name) => {
        resolve(name)
    })
})

getName.then((name) => {
    //When Connected to server
    const client = net.createConnection({ port: 3000 }, () => {
        console.log(name + " connected")
    })

    //Sending a message
    r1.on('line', (data) => {
        client.write(name + " : " + data)
    })

    //Recieving a message
    client.on('data', (data) => {
        console.log(data.toString())
    })

    client.on("error", () => {
        console.log("Connection Terminated from Server")
    })
})


