const grids = document.getElementById("grids");
const chgBtn = document.getElementById("change-btn");

const generateGrids = (gridNums) => {
  for (let i = 0; i < gridNums; i++) {
    for (let j = 0; j < gridNums; j++) {
      let div = document.createElement("div");
      grids.appendChild(div);
    }
  }
}

//? MAIN
// generate default grid
generateGrids(16);

// add event listener
chgBtn.addEventListener("click", () => {
  let gridNum = parseInt(prompt("Enter a Value:"));
  while (typeof(gridNum) !== "number" || (gridNum > 100 && gridNum < 1)) {
    gridNum = parseInt(prompt("Enter a Value:"));
  }

  removeAllChildNodes(grids);
  generateGrids(gridNum);
  
})

// create function to remove all childs
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}