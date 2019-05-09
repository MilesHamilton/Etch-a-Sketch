// container
const container = document.querySelector('#container')
container.setAttribute('style', 'display: flex; width: 16px; height: 16px; margin: auto;')

// grids
const div = document.createElement('div');
div.setAttribute('style', 'width: 16px; height: 16px; margin: auto; color: blue;')
container.appendChild(div)

const div1 = document.createElement('div');
div1.setAttribute('style', 'width: 16px; height: 16px; margin: auto; color: green;')
container.appendChild(div1)

const div2 = document.createElement('div');
div2.setAttribute('style', 'width: 16px; height: 16px; margin: auto;')
container.appendChild(div2)

const div3 = document.createElement('div')
div3.setAttribute('style', 'width: 16px; height: 16px; margin: auto;')
container.appendChild(div3)