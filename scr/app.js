'use strict'

const express=require('express');
const app=express();
const server=require('http').Server(app);
const io=require('socket.io')(server);
const bodypaser=require('body-parser');
const methodOverride=require('method-override');
const morgan = require("morgan");



const routerprofile=require('./routes/profile');


const viewDir=`${__dirname}/views`;
const publicDir = express.static(`${__dirname}/public`);
app.use(express.static(__dirname+"public"));
app.set('views', viewDir);
app.set('view engine','pug');

app.use(bodypaser.urlencoded({extended: false}));
app.use(bodypaser.json()); 
app.use(methodOverride('_method')); // esto es para que los formularios jade puedan usar otros metodos como put o delete
app.use(morgan("dev"));
app.use('/profile/dashboard',routerprofile);

require('./sockets')(io);

  app.use(publicDir);
module.exports=server;