const fs = require('fs')


// fs.readFile("./data.txt", (err, data) => {
//     console.log(data.toString())
// })

const readStream = fs.createReadStream('./source.txt',
    {
        highWaterMark: 1,
        encoding: 'utf-8'
    })
const writeStream = fs.createWriteStream("./dest.txt",
    {
        highWaterMark: 1,
        encoding: 'utf-8'
    })

readStream.on("data", (chunk) => {
    writeStream.write(chunk.toUpperCase())
})
readStream.on("end", () => {
    writeStream.end()
})

writeStream.on('finish', () => {
    console.log('yazma ishi bitdi..')
})
