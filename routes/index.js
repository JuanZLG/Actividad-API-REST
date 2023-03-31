const clientesRouter = require('./clientesRouter')


function routerApi(app){
    app.use('/Clientes', clientesRouter)

}
module.exports = routerApi