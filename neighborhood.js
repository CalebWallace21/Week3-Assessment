let randomButton = document.querySelector(`#random`)

function randomFood() {
    const choices = [`Subway`, `Hug-Hes Cafe`, `Pizza Pie Cafe`, `Jin's Resturant`]
    const random = Math.floor(Math.random() * choices.length);

    alert(choices[random])
}

randomButton.addEventListener(`click`, randomFood)