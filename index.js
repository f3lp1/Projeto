const express = require ('express')
const app = express()
const port = 8000

app.get('/', (req, res)=>{
    res.send('Server iniciado')
})

app.listen(port, ()=>{
    console.log('Servidor iniciado')
})


const { createHash } = require('crypto');

function hash(string) {
  return createHash('sha256').update(string).digest('hex');
}

console.log(hash('foo'));