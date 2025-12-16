function dynamic(){
    let HMS = document.querySelector(".hms");
let DMY = document.querySelector(".dmy")

let date = new Date();

// not calculated
nc_hour = date.getHours()
nc_minute = date.getMinutes()
nc_second = date.getSeconds()



let hours 
let minutes = nc_minute < 10 ? "0"+ nc_minute : nc_minute
let seconds = nc_second < 10 ? "0" + nc_second : nc_second
let ampm = nc_hour >= 12 ? "PM" : "AM";

if(nc_hour>12){
    let currentHour = date.getHours() -12;
    hours =  currentHour <10 ? "0" + currentHour : currentHour;
   

}else if(nc_hour === 0){
    hours = 12
}else{
    hours = date.getHours()
}

let month_arr  = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

let day_of_week =[
     "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

    

let currentDate = date.getDate() <10 ? "0"+date.getDate(): date.getDate();
let year = date.getFullYear()
let month = month_arr[date.getMonth()];
let day = day_of_week[date.getDay()]


HMS.innerHTML = ` <p>${hours}:${minutes}:${seconds} <span>${ampm}</span></p>`;
DMY.innerHTML = `<p>${currentDate},${month},${year} <span>${day}</span></p>`

}

setInterval(dynamic,1000)