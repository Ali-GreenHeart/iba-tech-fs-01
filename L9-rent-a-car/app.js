import express from "express"
import carRouter from "./cars.route.js"

const app = express()

app.use(express.json())
app.use('/cars', carRouter)



app.listen(10000, () => {
    console.log('listening on 10000')
})
