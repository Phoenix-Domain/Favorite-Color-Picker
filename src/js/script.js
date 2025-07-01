const studentName = document.querySelector('#name');
const addName = document.querySelector('#addName');
const display = document.querySelector('#display');
const clearAllBtn = document.querySelector('#clearAll')


let studentArray = JSON.parse(localStorage.getItem("studentArray")) || [];

studentArray.forEach(x => addNames(x));

addName.addEventListener('click', e => {
    e.preventDefault();
    const nameValue = studentName.value;
    addNames(nameValue);
    addToArray(nameValue);
    studentName.value = "";
})

function addNames(input){
    const newName = createName(input);
    display.append(newName);
}

function createName(input){
    const newName = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.textContent = "Delete";
    ;

    delBtn.addEventListener('click', ()=>{
      newName.remove();
      studentArray = studentArray.filter(x => x !== input);
      localStorage.setItem('studentArray',JSON.stringify(studentArray));
    })

    newName.append(input,delBtn);

    return newName;
}

function addToArray(input){
  studentArray.push(input);
  localStorage.setItem('studentArray',JSON.stringify(studentArray));
  
}

clearAllBtn.addEventListener('click', e => {
  e.preventDefault();
  clearAll();
})

function clearAll(){
  display.innerHTML = "";
  studentArray = [];
  localStorage.removeItem('studentArray');
}


