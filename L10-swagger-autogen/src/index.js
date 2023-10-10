const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger-output.json')
const express = require('express')
const app = express()

/* Routes */
const router = require('./routes')

/* Middlewares */
app.use(router)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3000, () => {
  console.log("Server is running!\nAPI documentation: http://localhost:3000/doc")
})
