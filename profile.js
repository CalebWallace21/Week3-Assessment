let colorButton = document.querySelector(`#color`)
let placeButton = document.querySelector(`#place`)
let ritualButton = document.querySelector(`#ritual`)

function favColor(){
    alert(`My favorite color is Blue!`)
}

function favPlace(){
    alert(`My favorite place is my Bed`)
}

function favRitual(){
    alert(`My favorite ritual is using the snooze button`)
}

colorButton.addEventListener(`click`, favColor)
placeButton.addEventListener(`click`, favPlace)
ritualButton.addEventListener(`click`, favRitual)