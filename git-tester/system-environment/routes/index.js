const express = require('express');
const router = express.Router();
const debug = require('debug')('system-environment-index');
const { workingDir, getBranches } = require('./exec-git');

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'System Environment Calvert'
    });
});

router.get('/you-rang', function(request, response) {
    const rangData = {
        program: 'system-environment',
        file: 'routes/index.js',
        result: 'system-environment you rang',
        server: 'system-environment',
        directory: __dirname,
        hostname: process.env.HOSTNAME,
        home: process.env.HOME,
        workingDir: workingDir
    };
    response.send(rangData);
});

router.get('/getBranches', function(request, response) {
    debug('Get Branches called');
    getBranches(response).catch(function(e) {
        console.log(e);
    });
});

module.exports = router;
