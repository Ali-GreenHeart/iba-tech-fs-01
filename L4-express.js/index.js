import express from "express";
import { readFile } from "fs/promises";
import urlMethodLogger from "./middlewares/urlMethodLogger.js";
import usersRouter from "./routes/users.js";

const app = express()

app.use(express.json())
app.use(urlMethodLogger)
app.use("/users", usersRouter)

app.get('/animals', (req, res) => {
    return res.end('just animals')
})
app.get('*', async (req, res) => {
    const content = await readFile("./pages/notfound.html")
    res.end(content)
})

app.listen(3000, () => {
    console.log(`3000de gozleyirem yolunu....`)
})

