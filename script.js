const container = document.querySelector('.container');
const clrBtn = document.querySelector('#clrBtn');
const newBtn = document.querySelector('#newBtn');
var gridItem = [];

createGrid(16); //generates the default 16x16 grid on initial page load


//Gets user input for custom grid size
function getSize() {
  let goodSize = false;
  while (!goodSize) {
    gridSize = prompt('How many squares per side(0-100):');
    if ((0 < gridSize < 100) && typeof(gridSize === number)) {
      goodSize = true;
    } else {
      prompt('Error! Please select a value between 0 and 100');
    }
  }
}


//Generates a grid based on user input
function createGrid(gridSize) {
  let totalItems = gridSize * gridSize;
  var newItem;
  container.style.gridTemplateColumns = (`repeat(${gridSize}, 1fr`);
  container.style.gridTemplateRows = (`repeat(${gridSize}, 1fr`);
  for (i = 0; i < totalItems; i++) {
    gridItem[i] = document.createElement("div");
    gridItem[i].classList.add("grid-item");
    container.appendChild(gridItem[i]);
  }
  document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('mouseover', event => {
      changeColor(item);
    })
  })
}


//Sets the color of the target cell to a random RGB value
function changeColor(e) {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  e.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

//Turns the whole grid white(effectively clearing it)
function clearGrid() {
  document.querySelectorAll('.grid-item').forEach(item => {
    item.style = 'backgroundColor: rgba(255,255,255,1) ';
  })
}

//Deletes every item in the grid,so a new one can be created
function deleteGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

//"Reset" button - sets grid back to default values, 16x16
clrBtn.addEventListener('click', () => deleteGrid());
clrBtn.addEventListener('click', () => createGrid(16));



//"New grid" button - clears grid and asks for user selection to create a new one
newBtn.addEventListener('click', () => deleteGrid());
newBtn.addEventListener('click', () => getSize());
newBtn.addEventListener('click', () => createGrid(gridSize));
