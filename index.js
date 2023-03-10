// Write your code here!
const removeMain = document.querySelector('main')
removeMain.parentElement.removeChild(removeMain)

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = 'BRETT is the champion'