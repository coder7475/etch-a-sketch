// constants
const grids = document.getElementById("grids");
const chgBtn = document.getElementById("change-btn");


// functions
const generateGrids = (gridNums) => {
  for (let i = 0; i < gridNums; i++) {
    for (let j = 0; j < gridNums; j++) {
      let div = document.createElement("div");
      grids.appendChild(div);
    }
  }
}

// create function to remove all childs
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

//? MAIN
// generate default grid
generateGrids(16);

// add event listener
// generate grids dynamically
chgBtn.addEventListener("click", () => {
  let gridNum = parseInt(prompt("Enter a Value:"));
  while (typeof(gridNum) !== "number" || (gridNum > 100 && gridNum < 1)) {
    gridNum = parseInt(prompt("Enter a Value:"));
  }

  removeAllChildNodes(grids);
  generateGrids(gridNum);
  
})

