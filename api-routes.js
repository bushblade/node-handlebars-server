const random = require('./ponyname')
const cors = require('cors')

const api = app => {

  app.get('/api', cors(), (req, res) => {
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