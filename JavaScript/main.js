spaceBun = {
    page0 : 'Hello this will let me read your mind',
    page1 : 'Haha I read your mind... wait',
    page2 : 'No you beat me'
}
let bodyBack = document.querySelector('body');
bodyBack.setAttribute('class','p-3 mb-2 bg-success text-white');
bodyBack.setAttribute('id', 'bodyTag')
// Added a class and tried to getElementByClass, wouldn't work but I was able to add an ID and that work
let containerTag = document.getElementById('bodyTag');
let containerArea = document.createElement('div');
containerTag.appendChild(containerArea)
containerArea.setAttribute('Class', 'container')
containerArea.setAttribute('id', 'boxStop')
containerArea.innerText = 'affadsfasdfdf'
let header = document.getElementById('boxStop');
let h1Section = document.createElement('h1');
header.appendChild(h1Section);
h1Section.innerText=spaceBun.page0;
h1Section.setAttribute('id', 'h1ID')
let changeUp = document.getElementById('h1ID')
let newButton = document.createElement('button')
header.appendChild(newButton);
newButton.innerText = 'Next';
newButton.setAttribute('id', 'nextButton');
clickButton = document.getElementById('nextButton');
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
let helpArea = document.getElementById('boxStop');
let helpTag = document.createElement('div');
helpArea.appendChild(helpTag);
helpTag.innerText = 'Inner Text is working';
helpTag.setAttribute('Id', 'helpText')
let extraArea = document.getElementById('boxStop');
let extraTag = document.createElement('div');
extraArea.appendChild(extraTag);
extraTag.innerText='extra text here';
extraTag.setAttribute('Id', 'extraText')
let circleArea = document.getElementById('boxStop');
let circleTag = document.createElement('button');
circleArea.appendChild(circleTag);
circleTag.setAttribute('Id','resetGo');
let circleButton = document.getElementById('resetGo');
circleButton.innerText='Go or Reset'


