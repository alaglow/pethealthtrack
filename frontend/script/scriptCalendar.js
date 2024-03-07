const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const eventDate = document.querySelector('.event-date')

let currentDate = new Date();

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth, 0)
    const lastDay = new Date(currentYear, currentMonth + 1, 0)
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const today = new Date;
    let event = false;
    let days = "";

    const monthYearString = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })

    monthYearElement.textContent = monthYearString.toUpperCase()

    let datesHtml = '';

    for (let i = firstDayIndex; i > 0; i--) {
        const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);

        datesHtml += `<div class = "date inactive">${prevDate.getDate()}</div>`

    }

    for (let i = 1; i <= totalDays; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';

        datesHtml += `<div class="date ${activeClass}">${i}</div>`
    }


    for (let i = 1; i <= 7 - lastDayIndex; i++) {
        const nextDate = new Date(currentYear, currentMonth + 1, i);

        datesHtml += `<div class="date inactive">${nextDate.getDate()}</div>`

    }

    if (
        currentDate.getDate() === today.getDate() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getFullYear() === today.getFullYear()
    ) {
        event = true;
    }

    datesElement.innerHTML = datesHtml;

}

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1)
    updateCalendar()
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1)
    updateCalendar()
});



updateCalendar();


const createContainerBtn = document.querySelector(".create-container");
const closeContainerBtn = document.getElementById("close-event-button");
addEventContainer = document.querySelector(".add-event-container");
addEventTitle = document.querySelector(".event-name");
addEventTime = document.querySelector(".event-time");


createContainerBtn.addEventListener('click', function () {
    addEventContainer.classList.add('active');
});

closeContainerBtn.addEventListener('click', function () {
    addEventContainer.classList.remove('active');
});


addEventTitle.addEventListener('input', function (e) {
    addEventTitle.value = addEventTitle.value.slice(0, 50);
});

//usunięcie niepotrzebnych znaków poza 0-9 i : 
addEventTime.addEventListener('input', function (e) {
    addEventTime.value = addEventTime.value.replace(/[^0-9:]/g, "");

    if (addEventTime.value.length === 2) {
        addEventTime.value += ":";
    }

    if (addEventTime.value.length >= 5) {
        addEventTime.value = addEventTime.value.slice(0, 5);
    }
})


document.addEventListener('DOMContentLoaded', function() {
    const eventName = document.querySelector('.event-name');
    const eventTime = document.querySelector('.event-time');
    const eventNamePar = document.getElementById('event-name-par')
    const eventTimePar = document.getElementById('event-time-par')
    const addBtn = document.querySelector('.add-btn')


addBtn.addEventListener('click', function() {
    const inputValue = eventName.value
    eventNamePar.textContent = inputValue;

    const hourValue = eventTime.value; 
    eventTimePar.textContent = hourValue;

  });
});

let actualDate = currentDate.toLocaleString('default', { day: 'numeric', month: 'long' })
eventDate.textContent = actualDate;

