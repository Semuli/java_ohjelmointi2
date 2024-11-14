function button_pressed() {
  alert("Button Clicked")
}

const button = document.querySelector('button')

button.addEventListener('click', button_pressed)