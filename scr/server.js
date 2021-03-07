'use strict'

const app=require('./app');
const PORT=process.env.PORT || 3000;
const mongoose=require('mongoose');


mongoose.connect('mongodb://localhost:27017/Mvibracion',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
        console.log('connectado a la base de datos exitosamente');
    app.listen(PORT,()=>{
    console.log('servidor corriedo exitosamente en el puerto 3000');
    });
}).catch(err=>console.log(err));