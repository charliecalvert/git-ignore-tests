var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Route Tester Calvert'
    });
});

router.get('/you-rang', function(request, response) {
    const rangData = {
        program: 'route-tester',
        file: 'routes/index.js',
        result: 'route-tester you rang',
        server: 'route-tester',
        directory: __dirname,
        hostname: process.env.HOSTNAME,
        home: process.env.HOME
    };
    response.send(rangData);
});

module.exports = router;
