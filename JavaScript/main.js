let state = {
    pages: [
      {
        pageNumber: 0,
        headerText: "I can read your mind",
        nextButton: "",
        helpText: "",
        extraText: "",
        circleButton: "Go",
      },
      {
        pageNumber: 1,
        headerText: "Pick a number from 01 - 99",
        nextButton: "Next",
        helpText: "When you have your number, click next",
        extraText: "",
        circleButton: "Reset",
      },
      {
        pageNumber: 2,
        headerText: "Add both Digets together to get a new number",
        nextButton: "Next",
        helpText: "Ex: 14 is 1 + 4 =5",
        extraText: "Click next to proceed",
        circleButton: "Reset",
      },
      {
        pageNumber: 3,
        headerText: "Subtract your new number from the original number",
        nextButton: "Next",
        helpText: "Ex: 14-5 = 9",
        extraText: "Click next to proceed",
        circleButton: "Reset",
      },
      {
        pageNumber: 4,
        headerText: "Symbols",
        nextButton: "Reveal",
        helpText: "Find your new number",
        extraText: "Note the symbol besides the number",
        circleButton: "Reset",
      },
      {
        pageNumber: 5,
        headerText: "Answer Symbol",
        nextButton: "",
        helpText: "Your symbol is",
        extraText: "answer symbol",
        circleButton: "Reset",
      },
    ],
    symbols: ["!", "@", "$", "#", "%", "^", "&", "*", "("],
    answer: "function",
    pageNumber: [0, 1, 2, 3, 4, 5],
  
    initFunc: function init() {
      let bodyBack = document.querySelector("body");
      bodyBack.setAttribute("class", "p-3 mb-2 bg-success text-white");
      bodyBack.setAttribute("id", "bodyTag");
      // Added a class and tried to getElementByClass, wouldn't work but I was able to add an ID and that work
      let containerTag = document.getElementById("bodyTag");
      let containerArea = document.createElement("div");
      containerTag.appendChild(containerArea);
      containerArea.setAttribute("Class", "container");
      containerArea.setAttribute("id", "boxStop");
      containerArea.innerText = "Format goes here";
      let header = document.getElementById("boxStop");
      let h1Section = document.createElement("h1");
      header.appendChild(h1Section);
      h1Section.setAttribute("id", "h1ID");
    //   let changeUp = document.getElementById("h1ID");
      let nextButton = document.createElement("button");
      header.appendChild(nextButton);
      nextButton.setAttribute("id", "nextButton");
    //   let clickButton = document.getElementById("nextButton");
      let helpArea = document.getElementById("boxStop");
      let helpTag = document.createElement("div");
      helpArea.appendChild(helpTag);
      helpTag.setAttribute("Id", "helpText");
      let extraArea = document.getElementById("boxStop");
      let extraTag = document.createElement("div");
      extraArea.appendChild(extraTag);
      extraTag.setAttribute("Id", "extraText");
      let circleArea = document.getElementById("boxStop");
      let circleTag = document.createElement("button");
      circleArea.appendChild(circleTag);
      circleTag.setAttribute("Id", "resetGo");
      let circleButton = document.getElementById("resetGo");
      function hidden () {
        if (nextButton.innerText == ""){
            console.log('working');
            nextButton.setAttribute('class', 'd-none');
        } else {
            console.log('meh')
            console.log(nextButton.innerText);
            nextButton.classList.remove('d-none');
        }
      }
      hidden()
      let addOne = 0;
      function updateText() {
        circleButton.innerText = `${state.pages[addOne].circleButton}`;
        nextButton.innerText = `${state.pages[addOne].nextButton}`;
        h1Section.innerText = `${state.pages[addOne].headerText}`;
        extraTag.innerText = `${state.pages[addOne].extraText}`;
        helpTag.innerText = `${state.pages[addOne].helpText}`;
      }
      window.onload = (event) => {
        console.log("page is fully loaded");
        updateText()
      };
  
      circleButton.addEventListener("click", () => {
        if (circleButton.innerText === "Go") {
          addOne = addOne + 1;
          console.log(addOne);
          nextButton.classList.remove('d-none');
          
          updateText()
          
          return addOne;
        } else {
          
          addOne = 0;
          updateText()
          nextButton.setAttribute('class', 'd-none');
          return addOne;
        }
      });
      nextButton.addEventListener("click", () => {
          addOne = addOne + 1;
          console.log(addOne);
          updateText()
          if(addOne > 4){
          console.log('page 5')
          hidden()
          }
        return addOne;
      });
    },
  };
  state.initFunc();
  console.log(state.pages[0]);
  