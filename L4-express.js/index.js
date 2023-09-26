import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.end('<h1> heyyy men burdayam.... </h1>')
})
app.get('/about', (req, res) => {
    res.end('<h1> About page</h1>')
})

app.listen(3000, () => {
    console.log(`3000de gozleyirem yolunu....`)
})

