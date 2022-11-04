console.log("hello world");

let duckImage = document.querySelector(`img`)

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}
function userCompliment(){
	alert(`Good looking User detected`)
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
duckImage.addEventListener(`mouseover`, userCompliment)
