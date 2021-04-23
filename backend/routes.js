const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/', controllers.getResults)
router.get('/app/*', controllers.getApp)
router.get('/results/*', controllers.getResults)

// app.get('/json', respondJson)
// app.get('/echo', respondEcho)
// app.get('/static/*', respondStatic)

module.exports = router;