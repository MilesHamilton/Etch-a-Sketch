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
div.appendChild(row)
}
turnColor();
}

// reset color
function removeColor() {
    document.querySelectorAll('div.cell')
    for (i = 0; i < cells.length; i++) {
    cells[i].classlist.remove('color')
    }  
}

// on page load create 16x16 grid
createGrid(16);

// on mouseover turn cells gray
function turnColor() {
    let cells = document.querySelectorAll('div.cell')
    for (i=0; i < cells.length; i++)
    cells[i].addEventListener('mouseover', function() {
        cells[i].classList.add('color')
    })
}

// refresh button
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', removeColor);

// new grid button
const grid = document.getElementById('new')
grid.addEventListener('click', () => {
    let squares = prompt("how many squares per side do you want for your new grid", '');
    if (squares) {
        let inner = document.getElementById('inner');
        let container = document.getElementById('container');
        inner.removeChild('container');
        createGrid(squares);
    } else if (squares === null) {
        return;
    }
});


