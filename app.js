const grids = document.getElementById("grids");
const chgBtn = document.getElementById("change-btn");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let div = document.createElement("div");
    grids.appendChild(div);
  }
}

chgBtn.addEventListener("click", () => {
  let gridNum = parseInt(prompt("Enter a Value:"));
  while (typeof(gridNum) !== "number" || (gridNum > 100 && gridNum < 1)) {
    gridNum = parseInt(prompt("Enter a Value:"));
  }

  removeAllChildNodes(grids);

  for (let i = 0; i < gridNum; i++) {
    for (let j = 0; j < gridNum; j++) {
      let div = document.createElement("div");
      grids.appendChild(div);
    }
  }
})

// create function to remove all childs
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}