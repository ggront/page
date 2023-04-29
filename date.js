let date = Date()

let splitDate = date.split(" ")

let dayOfWeek = splitDate[0]
let month = splitDate[1]
let day = splitDate[2]
let year = splitDate[3]

let dayOfWeekHTML = document.querySelector("#dayOfWeek")
let monthHTML = document.querySelector("#month")
let dayHTML = document.querySelector("#day")
let yearHTML = document.querySelector("#year")

function changeDate(){
    dayOfWeekHTML.innerHTML = dayOfWeek
    monthHTML.innerHTML = month
    dayHTML.innerHTML = day
    yearHTML.innerHTML = year
}
changeDate()




