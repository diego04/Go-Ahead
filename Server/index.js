'use strict'

var express = require('express');
var Memcached = require('memcached');

var app = express();

var memcachedAddr = process.env.MEMCACHE_PORT_11211_TCP_ADDR || 'localhost';
var memcachedPort = process.env.MEMCACHE_PORT_11211_TCP_PORT || '11211';
var memcached = new Memcached(memcachedAddr + ':' + memcachedPort);


app.get('/', (req, res, next) => {
    memcached.get('foo', function(err, value) {
        if (err) { return next(err); }
        if (value) {
            return res.status(200).send('Value: ' + value);
        }

        memcached.set('foo', Math.random(), 60, function(err) {
            if (err) { return next(err); }
            return res.redirect('/');
        });
    });
});

// Start the server
var server = app.listen(process.env.PORT || '8080', '0.0.0.0', function () {
    console.log('App listening at http://%s:%s', server.address().address,
        server.address().port);
    console.log('Press Ctrl+C to quit.');
});


/*
 Web Sockets
 https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/appengine/websockets/app.js

 Memcache
 https://github.com/3rd-Eden/memcached
 https://cloud.google.com/appengine/docs/flexible/nodejs/caching-application-data

 Datastore Emulator
 https://cloud.google.com/datastore/docs/tools/datastore-emulator
 */