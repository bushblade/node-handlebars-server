const config = require('./private'),
  mailgun = require('mailgun-js')({
    apiKey: config.apiKey,
    domain: config.domain
  }),
  random = require('./ponyname')

const router = app => {
  app.get('/', (req, res) => res.render('index', {
    title: 'Home',
    profileData: require('./views/partials/profile.js')
  }))

  app.get('/contact', (req, res) => res.render('contact', {
    title: 'Contact',
    success: false,
    script: "/contactValidate.js"
  }))

  app.post('/contact', (req, res) => {
    const data = {
      from: `${req.body.name} <${req.body.email}>`,
      to: config.to,
      subject: 'Message received from your website',
      text: req.body.message
    }
    mailgun.messages().send(data, (error, body) => console.log(body))
    res.render('contact', {
      title: 'Contact',
      success: true
    })
  })

  app.get('/api', (req, res) => {
    res.status(200).send({ message: 'You reached Bushblades API' })
  })

  app.get('/api/random-pony-name', (req, res) => {
    res.status(200).send({ name: `${random()}` })
  })

  app.get('/api/:test', (req, res) => {
    res.status(200).send({ message: `you reached the ${req.params.test} route` })
  })
}

module.exports = router