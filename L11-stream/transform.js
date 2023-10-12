const fs = require('fs')
const { Transform } = require('stream')

const readStream = fs.createReadStream('./source.txt', {
    highWaterMark: 1
})
const writeStream = fs.createWriteStream('./dest.txt')
// TASK: 1. Read the file with highWaterMark 1 byte. And uppercase the first 2 letters of the word. And write it to the writeStream. 

// flag variables
let meetWithSpace = 1
const uppercase = new Transform({
    transform(buffer, enc, cb) {
        let ch = buffer.toString()
        if (ch === ' ') {
            meetWithSpace = 0
        }
        if (meetWithSpace >= 1 && meetWithSpace <= 2) {
            ch = ch.toUpperCase()
        }
        meetWithSpace++
        cb(null, ch)
    }
})
readStream.pipe(uppercase).pipe(writeStream)
