const log4js = require('log4js');
const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()
const port = process.env.SERVER_PORT || 8000

// configure log
log4js.configure({
  appenders: {
    console: { type: 'console' },
  },
  categories: {
    default: { appenders: ['console'], level: 'debug' },
  }
})

app.use(log4js.connectLogger(log4js.getLogger("default"), { level: 'auto' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/v1/api/:id", (req, res) => {
   const result = {
      message : `eae manezao você mandou o id [${req.params.id}]`,
      date : new Date().getTime()
   }

   res.json(result)
})

app.post('/v1/api/clientes', function(req, res) {
   var id = req.body.id
   var name = req.body.nome
   var mobile = req.body.celular

   console.log(id, name, mobile)
   console.log(req)
   
   const result = {
      id : id,
      nome : name,
      celular : mobile 
   }

   res.send(result)
})

app.listen(port, () => console.log(`Listening on port ${port}`))
