const random = require('./ponyname')

const api = app => {

  app.get('/api', (req, res) => {
    res.status(200).send({
      message: 'You reached Bushblades API'
    })
  })

  app.get('/api/random-pony-name', (req, res) => {
    res.status(200).send({
      name: `${random()}`
    })
  })

  app.get('/api/:test', (req, res) => {
    res.status(200).send({
      message: `you reached the ${req.params.test} route`
    })
  })
}

module.exports = api