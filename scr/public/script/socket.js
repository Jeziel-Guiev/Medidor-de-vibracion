

(function (io){
  'use strict'
var io=io();




var data={
  labels: [0],
  datasets: [{ 
      data: [0],
      label: "ejeX",
      borderColor: "#3e95cd",
      fill: false
    },
    { 
      data: [0],
      label: "ejeY",
      borderColor: "#8e5ea2",
      fill: false
    },
    { 
      data: [0],
      label: "ejeZ",
      borderColor: "#3cba9f",
      fill: false
    }
  ]
}

function addData(chart, label, ejeX, ejeY,ejeZ) {
  var length = data.labels.length
  if (length >= 20) {
    data.datasets[0].data.shift()
    data.datasets[1].data.shift() //eje y
    data.datasets[2].data.shift()
    data.labels.shift()
  }
  chart.data.labels.push(label);
  //chart.data.datasets.forEach((dataset) => {
   //   dataset.data.push(value);
      chart.data.datasets[0].data.push(ejeX);
      chart.data.datasets[1].data.push(ejeY);
      chart.data.datasets[2].data.push(ejeZ);
     //   });
  chart.update();
}

var chart= new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: data,
  options: {
    title: {
      display: true,
      text: 'Vibracion Motor'
    }
  }
});


io.on('random', function(value){
 // console.log(value);
  const ejeX=value[0];
  const ejeY=value[1];
  const ejeZ=value[2];
  const temp=value[3];

  var tiempo=new Date()

  io.emit('casa pro', {title:34});
  addData(chart,`${tiempo.getHours()}:${tiempo.getMinutes()}`,ejeX,ejeY,ejeZ);
  addData2(chart2,`${tiempo.getHours()}:${tiempo.getMinutes()}`,temp);

})


/////////////////////////////////
var data2={
  labels: [0],
  datasets: [{ 
      data: [0],
      label: "Temperatura",
      borderColor: "#3e95cd",
      fill: false
    }
  ]
}

function addData2(chart, label, ejeX) {
  var length = data2.labels.length
  if (length >= 20) {
    data2.datasets[0].data.shift()
    data2.labels.shift()
  }
  chart.data.labels.push(label);
  //chart.data.datasets.forEach((dataset) => {
   //   dataset.data.push(value);
      chart.data.datasets[0].data.push(ejeX);
     //   });
  chart.update();
}

var chart2= new Chart(document.getElementById("line-chart2"), {
  type: 'line',
  data: data2,
  options: {
    title: {
      display: true,
      text: 'Temperatura Motor *C'
    }
  }
});

})(io)
