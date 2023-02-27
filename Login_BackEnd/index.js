import path from 'path';
import express from 'express';

var app = express();

import config from './config.js';
const PORT = config.port;
const MONGOURI = config.mongoUri;


// database stuff
// Connection URL - you should set this with a configuration 
//   file that doesn't go in GitHub, though
import mongoose from 'mongoose';
mongoose.Promise = global.Promise
mongoose.connect(MONGOURI, { dbName: "users" })
mongoose.connection.on('error', err => {
  throw new Error(`unable to connect to database: ${MONGOURI}`)
})





// 404 page
app.use(function ( req, res, next) {
    res.send('This page does not exist!')
});

app.listen(PORT, function () {
    console.log('Listening on http://localhost:'+PORT+'/');
});

