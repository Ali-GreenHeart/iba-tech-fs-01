import express from 'express'
import dotenv from 'dotenv'
import authMiddleware from './authMiddleware.js'
dotenv.config()

const app = express()


app.get('/products', (req, res) => {
    return res.json(`Hwere the products...`)
})
// middleware!
app.post('/order-product', authMiddleware, (req, res) => {
    return res.end('burdadi')
})

app.listen(process.env.PORT, () => {
    console.log('server is up...')
})
