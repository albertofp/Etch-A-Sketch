
// Generating the 4x4 grid

var gridContainer = document.querySelector('#grid-container');
var itemNumber = 1; /* each item in the grid is assigned an itemNumber
                        from 1 to 16*/

for(j = 1 ; j < 5 ; j++){
  for(i = 1 ; i < 5 ; i++){
    console.log('( ' + i + ' , ' + j + ' )');
    var item = document.createElement('item' + itemNumber);
    console.log(item);
    gridContainer.appendChild(item);
    itemNumber = itemNumber +1;
  }
}
