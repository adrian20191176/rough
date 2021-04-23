'use strict';

const Express = require('express');
const router = require('./lib');
const cors = require('cors');

const app = Express();
const port = process.env.PORT || 1005;

app.use(cors());
app.use('/scaard/', router);

app.listen(port, function () {
  console.log('Server started on port', port);
});
