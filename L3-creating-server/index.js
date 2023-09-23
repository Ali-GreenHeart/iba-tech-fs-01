import http from "http"
import { readFile } from "fs/promises"



const newServerByAli = http.createServer((req, res) => {
    console.log(req.url)
    let pageName = ''
    if (req.url !== '/favicon.ico') {
        if (req.url === '/about') {
            pageName = "./pages/about.html"
        } else if (req.url === '/') {
            pageName = "./pages/index.html"
        } else {
            pageName = "./pages/notfound.html"
        }
        readFile(pageName)
            .then((value) => {
                res.end(value)
            })
    }
})

newServerByAli.listen(8080)
