import http from "http"




const newServerByAli = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url !== '/favicon.ico') {
        if (req.url === '/about') {
            res.end(initialHTML('about', '<h1>You want to know about me!😈</h1>'))
        } else if (req.url === '/') {
            res.end(initialHTML('home', '<h1>Hell0 W0rld!</h1>'))
        } else {
            res.end(initialHTML('404 not found', '<h1>Haha, Not Found!🙄</h1>'))
        }
    }
})

newServerByAli.listen(8080)


function initialHTML(title, innerCode) {
    return `
    <html>
    <head>
        <meta charset="UTF-8">
        <title>${title}</title>
    </head>

    <body>
    <nav>
    <a  href="/" > go home </a>
    <a  href="/about" > about </a>
    <a  href="/miri" > Miri</a>
    </nav>
        ${innerCode}
    </body>

    </html>

    `
}
