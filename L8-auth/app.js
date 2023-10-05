import express from 'express'
import dotenv from 'dotenv'
import authMiddleware, { adminMiddleware } from './authMiddleware.js'
import { users } from "./db.js"
import { v4 as genId } from 'uuid'
import jwt from 'jsonwebtoken'

dotenv.config()

const app = express()
app.use(express.json())
app.get('/products', (req, res) => {
    return res.json(users)
})
app.post('/login', (req, res) => {
    const { username, password, role = 'user' } = req.body
    const id = genId()
    users.push({ id, username, password })
    const token = jwt.sign({ role, id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })
    return res.status(201).json({ token, id, msg: 'new user has been created!', })
})

app.post('/order-product', authMiddleware, (req, res) => {
    console.log(req.userId)
    return res.end('burdadi')
})
app.post('/edit-profile', authMiddleware, (req, res) => {
    console.log(req.userId)
    return res.end('bura edit-profile-dir')
})
app.post('/admin/add-product', adminMiddleware, (req, res) => {
    console.log(req.userId)
    return res.end('bura add product-dir')
})

app.listen(process.env.PORT, () => {
    console.log('server is up...')
})
