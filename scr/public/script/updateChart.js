
(function (io){
'use strict'
window.onload= function(){
    document.getElementById("boton").addEventListener("click", update)
}

var io=io();

function update(){
  console.log('presionado ');
 var f=[13,22,43,41,63,72,81];
 var l=['we','we','sd','asd','sdw','rt','gfg']
 // console.log(chart3.data.labels);
  //chart3.data.labels=l;
  //chart3.data.datasets[0].data=f;
 //  data1.labels.push(label);
 //  data1.datasets[0].data.push(ejeX);
 // chart3.update();
 io.emit('botonAdd',{title:'activado'})

}
io.on('actualizar', async function(res){
  //console.log(res);
  console.log('ACTUALIZADO');
  chart3.data.labels=res.fecha;
  chart3.data.datasets[0].data=res.ejeX;
  chart3.data.datasets[1].data=res.ejeY;
  chart3.data.datasets[2].data=res.ejeZ;
  await chart3.update();
  //var tiempo=new Date()
 //await update(chart3,'sdsd',res);
})





//labels: JSON.parse('!{labeli}')
//data: JSON.parse('!{dataX}'
//data: JSON.parse('!{dataY}')
//data: JSON.parse('!{dataZ}'),
var data1= {
  labels: [0] ,
  datasets: [{ 
      data: [0],
      label: "eje X",
      borderColor: "#3e95cd",
      fill: false
    }, 
    { 
      data: [0],
      label: "eje Y",
      borderColor: "#e8c3b9",
      fill: false
    }, { 
      data:[0],
      label: "eje Z",
      borderColor: "#c45850",
      fill: false
    }
  ]
}



 //function update(chart, label, ejeX) {

  //await chart.data.labels.push(label);
  //chart.data.datasets[0].data.push(ejeX);
 //  data1.labels.push(label);
 //  data1.datasets[0].data.push(ejeX);
  //chart.update();
  
  //}
  var chart3=new Chart(document.getElementById("line-chart3"), {
    type: 'line',
    data:data1,
    options: {
      title: {
        display: true,
        text: 'Grafica completa de inicio a fin'
      }
    }
  });




})(io)