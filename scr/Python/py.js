'use strict'
const {PythonShell} = require('python-shell')

var models=require('../models/acelerometro');

const mongoose=require('mongoose');


mongoose.connect('mongodb://localhost:27017/Mvibracion',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
        console.log('connectado a la base de datos exitosamente');
}).catch(err=>console.log(err));

var arrayX=[];
async function encontrar(callback){
  var data=await models.find({});


    for(let i=0;i<data.length;i++){
        const datX=data[i].axyz[0];
        arrayX.push(datX);

    }
  //console.log(arrayX)
  callback(arrayX)
}


encontrar(function(result){
  console.log(result);
})
let options = {
  mode: 'json',
  pythonOptions: ['-u'], // get print results in real-time
  args: arrayX
};

PythonShell.run('./scripts/py.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: ', results);
  
});