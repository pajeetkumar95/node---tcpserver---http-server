import net from 'net'

const client = net.createConnection({port: 3000}, () => {
    console.log("Connection Successfull")
    client.write("Hello Server!!")
})
client.on('data', (data) => {
    console.log("Acknowldegment: "+ data)
})
