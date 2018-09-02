const express = require('express'),
  app = express(),
  exhbs = require('express-handlebars'),
  bodyParser = require('body-parser'),
  router = require('./routes'),
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

router(app)

//invalid routes
app.use((req, res) => {
  if (res.status(404)) {
    res.render('notFound')
  }
})

app.listen(port, () => console.log(`server started on port ${port}`))

// test git change
