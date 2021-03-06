const config = require('./private'),
  mailgun = require('mailgun-js')({
    apiKey: config.apiKey,
    domain: config.domain
  }),
  apiRoutes = require('./api-routes')

const router = app => {
  app.get('/', (req, res) =>
    res.render('index', {
      title: 'Home',
      profileData: require('./views/partials/profile.js')
    })
  )

  app.get('/contact', (req, res) =>
    res.render('contact', {
      title: 'Contact',
      success: false,
      script: '/contactValidate.js'
    })
  )

  app.post('/contact', ({ body: { name, email, message } }, res) => {
    const data = {
      from: `${name} <${email}>`,
      to: config.to,
      subject: 'Message received from bushbladeprojects',
      text: message
    }
    mailgun.messages().send(data, (error, body) => console.log(body))
    res.render('contact', {
      title: 'Contact',
      success: true
    })
  })

  // API routes
  apiRoutes(app)
}

module.exports = router
