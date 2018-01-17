const Todo = require('./todo')

// Define as instruções que serão usadas
Todo.methods(['get', 'post', 'put', 'delete'])
// habilita o validator sempre que um dado for atualizado
// e irá retornar o próprio dado(antes retornava o antigo)
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo
