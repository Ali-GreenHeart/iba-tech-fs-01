import http from "http"

let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
    }
]


const newServerByAli = http.createServer((req, res) => {
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
