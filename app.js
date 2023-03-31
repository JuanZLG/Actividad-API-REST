const express = require('express');
const bodyParser = require('body-parser');

const routerApi =require('./routes')
const port = 3000;
const app = express();
app.set('view.engine','ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'));
routerApi(app)

app.get('/', (req, res)=>{
    res.send('clientes')
});


app.listen(port,()=>{ 
    console.log(`escuchando por el puerto http://localhost${port}`)
});