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


let state = {
    pages: [
        {
            pageNumber: 0,
            headerText: 'I can read your mind',
            nextButton: '',
            helpText: '',
            extraText: '',
            circleButton: 'Go',
        },
        {
            pageNumber: 1,
            headerText: 'Pick a number from 01 - 99',
            nextButton: 'Next',
            helpText: 'When you have your number, click next',
            extraText: '',
            circleButton: 'Reset',
        },
        {
            pageNumber: 2,
            headerText: 'Add both Digets together to get a new number',
            nextButton: 'Next',
            helpText: 'Ex: 14 is 1 + 4 =5',
            extraText: 'Click next to proceed',
            circleButton: 'Reset',
        },
        {
            pageNumber: 3,
            headerText: 'Subtract your new number from the original number',
            nextButton: 'Next',
            helpText: 'Ex: 14-5 = 9',
            extraText: 'Click next to proceed',
            circleButton: 'Reset',
        },
        {
            pageNumber: 4,
            headerText: 'Symbols',
            nextButton: 'Reveal',
            helpText: 'Find your new number',
            extraText: 'Note the symbol besides the number',
            circleButton: 'Reset',
        },
        {
            pageNumber: 5,
            headerText: 'Answer Symbol',
            nextButton: '',
            helpText: 'Your symbol is',
            extraText: 'answer symbol',
            circleButton: 'Reset',
        },
    ],
    symbols: ['symbols here'],
    answer: 'function',
    pageNumber: [0,1,2,3,4,5],
    functions: ['functions']
}