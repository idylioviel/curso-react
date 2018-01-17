// Mongoose serve p/ abrir conexão com o MongoDB e enviar instruções(ex: CRUD)
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// Referencia o banco e abre a conexão
module.exports = mongoose.connect('mongodb://localhost/todo')
