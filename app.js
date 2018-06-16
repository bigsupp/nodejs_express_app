require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const Auth = require('./server/middlewares/Auth')

var app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/server/views'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Route
app.use('/client', express.static(path.join(__dirname, '/client')));
app.use('/public/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/public/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
// app.use(Auth)
app.use('/', Auth, require('./server/routes/web'))
app.use('/admin', Auth, require('./server/routes/admin'))
app.use('/api', Auth, require('./server/routes/api'))

app.use("*", (req, res) => {
  res.render('error_404')
});

// Listen
app.listen(process.env.LISTEN_PORT, () => {
  console.log('Listening on ' + process.env.LISTEN_PORT)
})