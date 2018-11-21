const random = require('./ponyname')
const cors = require('cors')
const imgurOptions = require('./imgur-options')
const axios = require('axios')

const api = app => {
  app.get('/api', cors(), (req, res) => {
    res.status(200).send({
      message: 'You reached Bushblades API'
    })
  })

  app.get('/api/random-pony-name', cors(), (req, res) => {
    res.status(200).send({
      name: `${random()}`
    })
  })

  app.get('/api/:test', cors(), (req, res) => {
    res.status(200).send({
      message: `you reached the ${req.params.test} route`
    })
  })

  app.get('/api/imgur/:album', cors(), (req, res) => {
    const { album } = req.params
    axios
      .get(`https://api.imgur.com/3/album/${album}`, imgurOptions)
      .then(r => {
        res.status(200).send(r.data)
      })
      .catch(err => res.send(err))
  })
}

module.exports = api
