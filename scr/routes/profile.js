'use strict'
const express = require("express");
const router= express.Router();
var models=require('../models/acelerometro');

const controller=require('../controllers/profile');
router.get('/withjs',controller.dashboard);

router.get('/', async (req,res)=>{

    var data= await models.find({});
  var arrayX=[];
  var arrayY=[];
  var arrayZ=[];
  var arrayf=[];

    for(let i=0;i<data.length;i++){
        const datX=data[i].axyz[0];
        const datY=data[i].axyz[1];
        const datZ=data[i].axyz[2];

        const fecha=data[i].fecha[0];
        arrayX.push(datX);
        arrayY.push(datY);
        arrayZ.push(datZ);
        arrayf.push(fecha);
    }
  //  res.render('dashboard/barchart', { 
  //      title: 'My First Bar Chart',
   //     datai: JSON.stringify(number_of_posts_data),
   //     labeli: JSON.stringify(month_data)

    res.render('dashboard',{
        title:'Dashboard',
        dataX: JSON.stringify(arrayX),
        dataY: JSON.stringify(arrayY),
        dataZ: JSON.stringify(arrayZ),
        labeli: JSON.stringify(arrayf)
    });
});

router.get('/boton',(req,res)=>{

  res.render('boton',{
    title:'BotonScript'
  });
})

module.exports=router;