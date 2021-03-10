'use strict'


var axisX=0;
var axisY=0;
var axisZ=0;
var temp=0;

var valores=[0,0,0];

function Mqtt(callback){
  var mqtt=require('mqtt');

var client= mqtt.connect('128.199.14.19');
var clientX=mqtt.connect('128.199.14.19');
var clientY=mqtt.connect('128.199.14.19');
var clientZ=mqtt.connect('128.199.14.19');
var clientT=mqtt.connect('128.199.14.19');


client.on('connect', async function () {
//	console.log('conectado a mqtt brokers');
  var modelAcel=require('../models/acelerometro');




    clientX.subscribe('/ejeX', function (err) {
      if (!err) {
        clientX.on('message', async function (topic, message1) {
               var con=message1.toString().split("");
               var sli=con.splice(5);
               axisX=parseInt(sli.join(""));
          //   console.log(axisX)    
          })
       } 
    })
clientY.subscribe('/ejeY', function (err) {
      if (!err) {
        clientY.on('message', async function (topic, message1) {
               var con=message1.toString().split("");
               var sli=con.splice(5);
               axisY=parseInt(sli.join(""));
           //    console.log(axisY)
            
          })
       } 
    })
clientZ.subscribe('/ejeZ', function (err) {
      if (!err) {
        clientZ.on('message', async function (topic, message1) {
               var con=message1.toString().split("");
               var sli=con.splice(5);
               axisZ=parseInt(sli.join(""));
           //    console.log(axisZ)
           //    console.log(axisX+" "+axisY+" "+axisZ);

  
          })
       } 
    })
  clientT.subscribe('/temp', function (err) {
      if (!err) {
        clientT.on('message', async function (topic, message1) {
               
          var con=message1.toString().split("");
          var sli=con.splice(5);
          temp=parseInt(sli.join(""));
  
          })
       } 
    })
    const fecha=new Date();
    const hora=fecha.getHours();
    const minu=fecha.getMinutes();
    const conca=`${hora}:${minu}`
    const acelerometro= new modelAcel({
      axyz:[axisX,axisY,axisZ],
      fecha:conca
  })
      await acelerometro.save();  

  valores=[axisX,axisY,axisZ,temp];

  
})
//return valores;
//var mqtt=require('mqtt');
callback(valores);

};

module.exports={Mqtt}
