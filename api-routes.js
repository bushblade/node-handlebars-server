const random = require('./ponyname')
const cors = require('cors')

const api = app => {

<<<<<<< HEAD
  app.get('/api', cors(), (req, res) => {
=======
  // CORS
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  app.get('/api', (req, res) => {
>>>>>>> 0c3ae62014abaf29a2b945000737e362cfa650a3
    res.status(200).send({
      message: 'You reached Bushblades API'
    })
  })

  app.get('/api/random-pony-name', cors(),  (req, res) => {
    res.status(200).send({
      name: `${random()}`
    })
  })

  app.get('/api/:test', cors(), (req, res) => {
    res.status(200).send({
      message: `you reached the ${req.params.test} route`
    })
  })
}

module.exports = api