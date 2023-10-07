import express from "express"
import carRouter from "./cars.route.js"
import jwt from 'jsonwebtoken'

const app = express()

app.use(express.json())
app.use('/cars', carRouter)


app.post('/admin/login', async (req, res) => {
    console.log(req.body)
    const { username, password } = req.body
    if (password !== 'ali') {
        return res.status(403).json({ msg: "you're not an admin! !congrats" })
    }
    const token = await jwt.sign({ username }, "SECRET")
    return res.json({ access_token: token, msg: "you're an admin! congrats!" })
})


app.listen(10000, () => {
    console.log('listening on 10000')
})
