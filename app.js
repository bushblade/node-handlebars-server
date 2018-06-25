const express = require('express'),
  app = express(),
  exhbs = require('express-handlebars'),
  bodyParser = require('body-parser'),
  config = require('./private'),
  mailgun = require('mailgun-js')({
    apiKey: config.apiKey,
    domain: config.domain
  }),
  port = 80

app.engine('hbs', exhbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({
  extended: true
}))

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
  console.log(req.body)
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

//invalid routes
app.use((req, res) => {
  if (res.status(404)) {
    res.render('notFound')
  }
})

app.listen(port, () => console.log(`server started on port ${port}`))