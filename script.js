


const container = document.querySelector('.container');
const clrBtn = document.querySelector('#clrBtn');
var gridItem = [];

// Generating the grid

let gridSize = 16; //Will eventually be customizeable, fixed for now




function createGrid(gridSize){
  let totalItems = gridSize * gridSize;
  var newItem;
  container.style.gridTemplateColumns = (`repeat(${gridSize}, 1fr`);
  container.style.gridTemplateRows = (`repeat(${gridSize}, 1fr`);
  for(i=0; i < totalItems ; i++){
    gridItem[i] = document.createElement("div");
    gridItem[i].classList.add("grid-item");
    newItem = gridItem[i];
    container.appendChild(newItem);
  }
  document.querySelectorAll('.grid-item').forEach(item => {
  item.addEventListener('mouseover', event => {
    changeColor(item);
  })
})
}


function changeColor(e){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  e.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

//Turns the whole grid white(effectively clearing it)
function clearGrid(){
  document.querySelectorAll('.grid-item').forEach(item => {
    item.style = 'backgroundColor: rgba(255,255,255,1) ';
  })
}

//Deletes every item in the grid,so a new one can be created
function deleteGrid(){
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
}

clrBtn.addEventListener('click', ()=>clearGrid());


createGrid(gridSize);
