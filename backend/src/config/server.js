const port = 3003

// Vai fazer o parsing do código, no caso urlencoded e json
const bodyParser = require('body-parser')
// Express.js é o servidor que roda no node
const express = require('express')
// Cria o servidor
const server = express()
// Middleware para permitir que outra aplicação consiga fazer requisição
const allowCors = require('./cors')

// Adiciona middlewares para cada requisição que acontecer
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

// O servidor vai ficar de olho na porta definida
server.listen(port, function() {
  console.log(`BACKEND is running on por ${port}`)
})

module.exports = server
