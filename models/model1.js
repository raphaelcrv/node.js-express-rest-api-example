const routes = require('express').Router();


// /api/v1/model1
routes.get('/',(req, res) => {
  res.json({data : true})
})

module.exports = routes;