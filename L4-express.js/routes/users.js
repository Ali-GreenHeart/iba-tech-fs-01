import users from "../data.js";
import { Router } from "express";

const usersRouter = new Router()


usersRouter.get("/", (req, res) => {
    console.log(req.url)
    console.log(req.method)
    console.log('mee')
    res.writeHead(201, "ok!", {
        "Content-Type": "application/json"
    })

    let data = users.filter((user) => req.query.name ? user.name.toLowerCase().startsWith(req.query.name.toLowerCase()) : true)

    return res.status(200).end(JSON.stringify(data))
})
usersRouter.get('/animals', (req, res) => {
    return res.end('users animals')
})
usersRouter.post("/", (req, res) => {
    users.push(req.body)
    return res.status(201).end('User has been created successfully!')
})
usersRouter.put("/:id", (req, res) => {
    const _id = req.params.id
    const indexOfUser = users.findIndex(({ id }) => id === _id)
    users.splice(indexOfUser, 1, req.body)
    res.writeHead(201, "ok!", {
        "Content-Type": "application/json"
    })
    return res.end("User edited successfully!")
})

usersRouter.delete("/:id", (req, res) => {
    const _id = req.params.id
    const indexOfUser = users.findIndex(({ id }) => id === _id)
    users.splice(indexOfUser, 1)
    res.writeHead(200, "ok!", {
        "Content-Type": "application/json"
    })
    return res.end("User deleted successfully!")
})


export default usersRouter;
