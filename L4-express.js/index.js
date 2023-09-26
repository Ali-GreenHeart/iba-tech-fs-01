import express from "express";
import { readFile } from "fs/promises";
import users from "./data.js";

const app = express()

app.use(express.json())

app.get("/users", (req, res) => {
    res.writeHead(201, "ok!", {
        "Content-Type": "application/json"
    })

    let data = users.filter((user) => req.query.name ? user.name.toLowerCase().startsWith(req.query.name.toLowerCase()) : true)

    return res.status(200).end(JSON.stringify(data))
})
app.post("/users", (req, res) => {
    users.push(req.body)
    return res.status(201).end('User has been created successfully!')
})
app.put("/users/:id", (req, res) => {
    const _id = req.params.id
    const indexOfUser = users.findIndex(({ id }) => id === _id)
    users.splice(indexOfUser, 1, req.body)
    res.writeHead(201, "ok!", {
        "Content-Type": "application/json"
    })
    return res.end("User edited successfully!")
})

app.delete("/users/:id", (req, res) => {
    const _id = req.params.id
    const indexOfUser = users.findIndex(({ id }) => id === _id)
    users.splice(indexOfUser, 1)
    res.writeHead(200, "ok!", {
        "Content-Type": "application/json"
    })
    return res.end("User deleted successfully!")
})

app.get('*', async (req, res) => {
    const content = await readFile("./pages/notfound.html")
    res.end(content)
})

app.listen(3000, () => {
    console.log(`3000de gozleyirem yolunu....`)
})

