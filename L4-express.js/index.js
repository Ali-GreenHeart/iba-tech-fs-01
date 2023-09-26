import express from "express";
import { readFile } from "fs/promises";

const app = express()

app.use(express.static("public"))

app.get("/", async (req, res) => {
    const content = await readFile("./pages/index.html")
    res.end(content)
})
app.get('/about', async (req, res) => {
    const content = await readFile("./pages/about.html")
    res.end(content)
})
app.get('*', async (req, res) => {
    const content = await readFile("./pages/notfound.html")
    res.end(content)
})

app.listen(3000, () => {
    console.log(`3000de gozleyirem yolunu....`)
})

