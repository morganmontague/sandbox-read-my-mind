spaceBun = {
    page0 : 'Hello this will let me read mind',
    page1 : 'Haha I read your mind... wait',
    page2 : 'No you beat me'
}
let bodyBack = document.querySelector('body')
bodyBack.setAttribute('class', 'p-3 mb-2 bg-success text-white')

let header = document.getElementById('headerText');
let h1Section = document.createElement('h1');
header.appendChild(h1Section);
h1Section.innerText=spaceBun.page0;
h1Section.setAttribute('id', 'h1ID')
let changeUp = document.getElementById('h1ID')
let newButton = document.createElement('button')
header.appendChild(newButton);
newButton.innerText = 'Click';
newButton.setAttribute('id', 'buttonOne');
clickButton = document.getElementById('buttonOne');
clickButton.addEventListener('click',() => {
    console.log('hi')
    if (changeUp.innerText === spaceBun.page0) {
       changeUp.innerText = spaceBun.page1
       console.log('spaceBunpage1')
   } 
else if (changeUp.innerText === spaceBun.page1) {
    changeUp.innerText = spaceBun.page2
    console.log('page2')
} 
else {h1Section.innerText = 'broke'}
}
)
