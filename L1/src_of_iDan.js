// iDan
import fs from 'fs'

let previousIf = false

fs.readFile("./index.iDan", {
    encoding: "ascii"
}, (err, data) => {
    const rows = data.split("\n")
    // console.log(rows)
    rows.forEach((row, i, arr) => {
        if (row.startsWith('xoxoxo')) {
            consoleLog(row)
        }
        else if (row.startsWith("eger")) {
            if (!row.endsWith('{')) throw new Error('sintaksis sehvi etdiniz. Geleceyin dilini oyrenin, iDan!')
            const condition = row.slice(row.indexOf('(') + 1, row.lastIndexOf(')'))
            previousIf = eval(condition)
            if (eval(condition)) {
                consoleLog(arr[i + 1].trim())
            }
        } else if (row.startsWith('yoxsa')) {
            if (arr[i - 1] !== '}') throw new SyntaxError("you've forgotten the enclosed brace!")
            if (!row.endsWith('{')) throw new SyntaxError("you've forgotten the starting brace!")
            if (previousIf) {
                previousIf = false
            } else {
                consoleLog(arr[i + 1])
            }
        }
    })
})



function consoleLog(row) {
    console.log(row.slice(row.indexOf('"') + 1, row.lastIndexOf('"')))
}
