// Loader vai chamar todas as configs

const server = require('./config/server')

require('./config/database')
require('./config/routes.js')(server)
