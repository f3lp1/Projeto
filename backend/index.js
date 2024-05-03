const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('Server iniciado')
})

app.listen(port, () => {
    console.log('Servidor iniciado')
})