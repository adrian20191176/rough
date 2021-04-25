'use-strict'

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./backend/routes');
const app = express()

const port=process.env.PORT||1005

function cors (req, res, next) {
	const origin = req.headers.origin;
	res.setHeader('Access-Control-Allow-Origin', origin||'*')
	res.setHeader('Access-Control-Allow-Methods','POST, GET, PUT, DELETE, OPTIONS, XMODIFY')
	res.setHeader('Access-Control-Allow-Credentials','true')
	res.setHeader('Access-Control-Max-Age','86400')
	res.setHeader('Access-Control-Allow-Headers','X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
	next()
}
app.use(cors);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.use('/scaard/',routes)

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    console.log("Hi");
    app.use(express.static(path.join(__dirname, 'reachHigh-heb-app/build')));

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'reachHigh-heb-app/build', 'index.html'));
    });
};

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});

app.listen(port, () => console.log(`Server listening on port ${port}`))