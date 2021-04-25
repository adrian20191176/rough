'use strict';

const Express = require('express');
const router = require('./lib');
const bodyParser = require('body-parser');

const app = Express();
const port = process.env.PORT || 1005;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.use('/scaard/',router)

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    console.log("Hi");
    app.use(express.static(path.join(__dirname, 'reachHigh-heb-app/build')));

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'reachHigh-heb-app/build', 'index.html'));
    });
};

app.use('/scaard/', router);

app.listen(port, function () {
  console.log('Server started on port', port);
});
