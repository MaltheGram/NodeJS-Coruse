const express = require('express')
const app = express()

// Root endpoint
app.get('/', (request, response) => {
    response.send({
        message: 'Created my fist route, Check!'
    })
})

app.listen(8080)


