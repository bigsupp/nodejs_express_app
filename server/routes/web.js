const express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.render('web/index')
})

module.exports = router