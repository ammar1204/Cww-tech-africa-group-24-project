<<<<<<< HEAD
const currentDate = document.querySelector('.current-date');
const daysTag = document.querySelector('.days');
const prevNextIcon = document.querySelectorAll('.icons span');
const currentDate2 = document.getElementById('current-date-2');

//getting new date, current year and month
let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let currentDay = date.getDay();
let TodayDate = date.getDate();

//days array
const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
    "Saturday"
];

//months array
const months =  [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const renderCalendar = () => {
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();//getting first day of the month
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();//getting last date of month
    let lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay(); //getting ast date of the month
    let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();//last date of the previous month
    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;// creating li of previous last days
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {// creating list of all days of current month

        //adding active li if the current day, month and year match
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth()
             && currentYear === new Date().getFullYear() ? "active": "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayOfMonth; i < 6; i++) {//creating li of next month first day
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;

    }
    currentDate.innerText = `${days[currentDay]}, ${TodayDate}`;
    currentDate2.innerHTML = `${months[currentMonth]} ${currentYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener('click', () => { //adding click to the icons
        //if clicked icon is previos it decrement the month, if not it will in increment the month
        currentMonth = icon.id === 'next' ? (currentMonth + 1) : (currentMonth - 1);

        if (currentMonth < 0 || currentMonth > 0) {
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});
=======

>>>>>>> 3e1c252b32870e9aa62d7163d64471419659e2e3
