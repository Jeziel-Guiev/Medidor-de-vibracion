'use strict'
module.exports = function(io) {

  var models=require('./models/acelerometro');

 
    const reciveData=require('./Mqtt/Enlaces');
    io.on('connection', function (socket) {
	
        console.log('Nuevo usuario conectado socket '+socket.id);
       

     
      socket.on('botonAdd', async function(datas){

          console.log(datas);
        //  console.log(arrayX);

        var pais=['cocha','la paz','oruro','tarija','santa cruz'];
        var poblacion=[2313,12342,12341,41231,42112];
         var data={
           pais:pais,
           poblacion:poblacion
         }
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
       var datos= {
          ejeX:arrayX,
          ejeY:arrayY,
          ejeZ:arrayZ,
          fecha:arrayf
       }

         await socket.emit('actualizar',datos);
      })

    
    });    
    
    
    setInterval(function(){
      reciveData.Mqtt(function(resultado){
      console.log(resultado);
      io.emit('random', resultado);
     })
  },2000);
   



}