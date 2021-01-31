


const container = document.querySelector('.container');
let gridItem = [];


// Generating the grid
function returnGridsize(){
  return 4;
}


function createGrid(){
  let totalItems = returnGridsize * returnGridsize;
  container.style.gridTemplateColumns = (`repeat(${returnGridsize}, 1fr`);
  container.style.gridTemplateRows = (`repeat(${returnGridsize}, 1fr`);
  for(i=0; i < totalItems ; i++){
    gridItem[i] = document.createElement("div");
    gridItem[i].classList.add("grid-item");
    gridItem[i].addEventListener('mouseover', changeColor());
    gridContainer.appendChild(gridItem[i]);
  }
}

function changeColor(e){
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

//Turns the whole grid white(effectively clearing it)
function clearGrid(){
  gridItem.forEach(item => {
    item.style = 'backgroundColor: rgba(255,255,255,1) ';
  })
}

//Deletes every item in the grid,so a new one can be created
function deleteGrid(){
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
}
