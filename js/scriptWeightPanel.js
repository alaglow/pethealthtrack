const animalWeight = document.getElementById('animal-weight');
const addWeightBtn = document.getElementById('add-weight-btn')
const inputDate = document.getElementById('date')
const inputWeight = document.getElementById('weight')
let animalWeightData =  {
    labels: [],
    datasets: [{
      label: 'Waga w kg',
      data: [],
      borderWidth: 1
    }]
  }

let graph = new Chart(animalWeight, {
  type: 'line',
  data: animalWeightData,
  options: {
    scales: {
      x: [{
        ticks: {
            maxTicksLimit: 3
        }
    }],
      y: [{
        ticks: {
          maxTicksLimit: 3,
        beginAtZero: true
      }
    }]
    }
  }
});



addWeightBtn.addEventListener("click", () => {

let dateOb = new Date (inputDate.value);
let day = dateOb.getDate()
let month = dateOb.getMonth()+1;

let date = `${day}.${month}`
let weight = inputWeight.value;

console.log(day)
animalWeightData.labels.push(date)
animalWeightData.datasets[0].data.push(weight)
    graph.update();
})
