const color = document.querySelector('#color');
const colorBtn = document.querySelector('#colorBtn');
const display = document.querySelector('#display');

const body = document.querySelector('body');
body.style.background = localStorage.getItem('color');
display.textContent = localStorage.getItem('text');

colorBtn.addEventListener('click', e => {
  e.preventDefault();
  const input = color.value.trim();
   localStorage.setItem('color', color.value);
  if (input.length > 0){
    changeColor(input);
    displayText(input);
  }else{
    alert('Please Input a Color')
  }
  color.value = "";
})

function changeColor(input){
  document.body.style.background = input;
}

function displayText(input){
  const displayText = `Your Favorite Color is ${input}`;
  display.textContent = displayText;
  localStorage.setItem('text', displayText);
}