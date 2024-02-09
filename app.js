const grids = document.getElementById("grids");
const chgBtn = document.getElementById("change-btn");

chgBtn.addEventListener("click", () => {
  const gridNum = prompt("Enter a Value:");
  console.log(gridNum);
})

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let div = document.createElement("div");
    grids.appendChild(div);
  }
}
