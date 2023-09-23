import http from "http"
import fs from "fs/promises"
import dotenv from 'dotenv'
dotenv.config()

console.log(process.env.API_TOKEN)

async function getUsersFromDB() {
    const _json = await fs.readFile("./db/db.json", {
        encoding: 'utf-8'
    })
    return JSON.parse(_json);
}
async function writeUsersToDB(users) {
    await fs.writeFile("./db/db.json", users)
}

getUsersFromDB()
const newServerByAli = http.createServer(async (req, res) => {
    let users = await getUsersFromDB()
    res.writeHead(200, 'ok!', {
        'Content-Type': "application/json"
    })
    let [, api, endPoint, id] = req.url.split('/')
    if (api === 'api' && endPoint === 'users') {
        switch (req.method) {
            case 'GET':
                if (id && !isNaN(id)) {
                    return res.end(JSON.stringify(users.find((user) => user.id == id + '')))
                }
                return res.end(JSON.stringify(users))
            case "POST":
                try {
                    req.on("data", (chunk) => {
                        const newUser = JSON.parse(chunk.toString())
                        users.push(newUser)
                        writeUsersToDB(JSON.stringify(users))
                        return res
                            .writeHead(201, 'created!')
                            .end('User has been created!')
                    })
                } catch (error) {
                    return res
                        .writeHead(500, 'sorry something has happened! maybe you, maybe us!')
                        .end('Server error!')
                }
                break;
            case "PUT":
                try {
                    if (id && !isNaN(id)) {
                        req.on("data", (chunk) => {
                            const editedUser = JSON.parse(chunk.toString())
                            users = users.map((user) => {
                                writeUsersToDB(JSON.stringify(users))
                                if (user.id == id) {
                                    return editedUser;
                                }
                                return user;
                            })
                            return res
                                .writeHead(201, 'edited!')
                                .end('User has been changed!')
                        })
                    } else {
                        throw new Error("ID is not provided!")
                    }
                } catch (err) {
                    return res
                        .writeHead(500, err.message ?? 'sorry something has happened! maybe you, maybe us!')
                        .end(err.message ?? 'Server error!')
                }
                break;
            case "DELETE":
                try {
                    if (id && !isNaN(id)) {
                        users = users.filter((user) => user.id != id)
                        writeUsersToDB(JSON.stringify(users))
                        return res
                            .writeHead(200, 'ok!')
                            .end('User has been deleted!')
                    } else {
                        throw new Error("ID is not provided!")
                    }
                } catch (err) {
                    return res
                        .writeHead(500, err.message ?? 'sorry something has happened! maybe you, maybe us!')
                        .end(err.message ?? 'Server error!')
                }
                break;
            default:
                return res.
                    writeHead(404, 'method is not supported!')
                    .end("Method is not supported!")
        }
    } else {
        return res.
            writeHead(404, 'endpoint not found!')
            .end()
    }
})

newServerByAli.listen(8080)
