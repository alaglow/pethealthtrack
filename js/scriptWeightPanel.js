const animalWeight = document.getElementById('animal-weight');
const addWeightBtn = document.getElementById('add-weight-btn')
const inputDate = document.getElementById('date')
const inputWeight = document.getElementById('weight')
const addWeightPanelBtn = document.querySelector('.add-weight-panel-button')
const weightPopup = document.querySelector('.weight-popup')
const weightPopupCloseBtn = document.querySelector('.weight-popup-close-btn')
const addVetBtn = document.querySelector('.add-vet-button')
const vetPopup = document.querySelector('.vet-popup')
const vetPopupCloseBtn = document.querySelector('.vet-popup-close-btn')
const addWalksBtn = document.querySelector('.add-walks-button')
const walksPopup = document.querySelector('.walks-popup')
const walksPopupCloseBtn = document.querySelector('.walks-popup-close-btn')



let animalWeightData = {
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
      x: {
        ticks: {
          maxTicksLimit: 5
        },
        title: {
          display: true,
          text: 'Data'
        }
      },
      y: {
        ticks: {
          maxTicksLimit: 10
        },
        title: {
          display: true,
          text: 'Waga'
        }
      }
    }
  }
});



addWeightBtn.addEventListener("click", () => {

  let dateOb = new Date(inputDate.value);
  let day = dateOb.getDate()
  let month = dateOb.getMonth() + 1;

  let date = `${day}.${month}`
  let weight = inputWeight.value;

  console.log(day)
  animalWeightData.labels.push(date)
  animalWeightData.datasets[0].data.push(weight)
  graph.update();
})

addWeightPanelBtn.addEventListener("click", () =>{
  weightPopup.classList.add('open')
})

weightPopupCloseBtn.addEventListener("click", () =>{
  weightPopup.classList.remove('open')
})

addVetBtn.addEventListener("click", () =>{
  vetPopup.classList.add('open')
})

vetPopupCloseBtn.addEventListener("click", () =>{
  vetPopup.classList.remove('open')
})

addWalksBtn.addEventListener("click", () =>{
  walksPopup.classList.add('open')
})

walksPopupCloseBtn.addEventListener("click", () =>{
  walksPopup.classList.remove('open')
})