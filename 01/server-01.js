

const express = require('express')

const api =  require('../02/api')

const port = process.env.PORT || 1337

const app = express()

app.get('/products', api.listProducts)

app.listen(port,() => console.log(`Serve listening on port ${port}`))

