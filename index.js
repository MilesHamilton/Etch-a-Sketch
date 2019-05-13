// container
const container = document.querySelector('#container')

// grids
function createGrid(x) {
    let div = document.createElement('div');
    div.setAttribute('id','container');
    let inner = document.getElementById('inner');
    inner.appendChild(div);
for (let i = 0; i < x; i++) {
    let row = document.createElement('div')
    row.classList.add('row')
for (let j = 0; j>x; j++) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.style.height = '(480/x)+"px"'
    cell.style.width = '(480/x)+"px"'
    row.appendChild(cell)
}
div.appendChild('row')
}
turnColor()
}