import path from 'path';
import express from 'express';
import userRoutes from './user.routes.js'


import bodyParser from 'body-parser'

var app = express();

import config from './config.js';
const PORT = config.port;
const MONGOURI = config.mongoUri;


// database stuff
// Connection URL - you should set this with a configuration 
//   file that doesn't go in GitHub, though
import mongoose from 'mongoose';
//mongoose.Promise = global.Promise
//mongoose.connect(MONGOURI, { dbName: "users" })
//mongoose.connection.on('error', err => {
//  throw new Error(`unable to connect to database: ${MONGOURI}`)
//})
await mongoose.connect('mongodb://127.0.0.1/my_database');


// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', userRoutes)

// 404 page
app.use(function ( req, res, next) {
    res.send('This page does not exist!')
});

app.listen(PORT, function () {
    console.log('Listening on http://localhost:'+PORT+'/');
});

