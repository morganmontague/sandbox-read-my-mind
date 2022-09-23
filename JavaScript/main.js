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
        headerText: '',
        nextButton: "Reveal",
        helpText: "Find your new number",
        extraText: "Note the symbol besides the number",
        circleButton: "Reset",
      },
      {
        pageNumber: 5,
        headerText: "Answer Function SymFunc",
        nextButton: "",
        helpText: "Your symbol is",
        extraText: "answer Function symFunc",
        circleButton: "Reset",
      },
    ],
    symbol: ["!", "@", "$", "#", "%", "^", "&", "*", "("],
    answer: "function",
    pageNumber: [0, 1, 2, 3, 4, 5],
    initFunc: function init() {
            // adding the array
            function symFunc () {
              let symbolArr = []
              let numberArr = []
              for (let i = 1; i <= 11; i++) {
                symbolArr = symbolArr.concat(state.symbol);
                // if (i ==11) { break; } don't need that
            }
            for (let i = 0; i<=98; i++){
              let a = i
              let b = i
              if (b%9 == 0){
                b 
            } else 
            {b}
            // using temp literals to place numbers by symbols
            numberArr = numberArr.concat(`${a} = ${symbolArr[b]}`);
            }
            let answer = '!'
            let printArr = numberArr.join('\n')
            console.log(printArr)
            
              state.pages[4].headerText=printArr
              state.pages[5].headerText=answer
              state.pages[5].extraText=answer
           
                }
            symFunc()

  
      // creating the html in this section
      let bodyBack = document.querySelector("body");
      bodyBack.setAttribute("class", "p-3 mb-2 bg-success text-center row text-white");
      bodyBack.setAttribute("id", "bodyTag");
      // Added a class and tried to getElementByClass, wouldn't work but I was able to add an ID and that worked
      let containerTag = document.getElementById("bodyTag");
      let containerArea = document.createElement("div");
      containerTag.appendChild(containerArea);
      containerArea.setAttribute("class", "container card w-75 h-75 bg-dark justify-content-center align-items-center");
      containerArea.setAttribute("id", "boxStop");
      // containerArea.innerText = "Format goes here";
      // this will have the format sections
      let header = document.getElementById("boxStop");
      let h1Section = document.createElement("h1");
      header.appendChild(h1Section);
      h1Section.setAttribute("id", "h1ID");
      let nextButton = document.createElement("button");
      header.appendChild(nextButton);
      nextButton.setAttribute("class", "p-3 mb-2 bg-success");
      nextButton.setAttribute("id", "nextButton");
      let helpArea = document.getElementById("boxStop");
      let helpTag = document.createElement("div");
      helpArea.appendChild(helpTag);
      helpTag.setAttribute("Id", "helpText");
      let extraArea = document.getElementById("boxStop");
      let extraTag = document.createElement("div");
      extraArea.appendChild(extraTag);
      extraTag.setAttribute("Id", "extraText");
      extraTag.setAttribute("Id", "extraText h-75");
      let circleArea = document.getElementById("boxStop");
      let circleTag = document.createElement("button");
      circleArea.appendChild(circleTag);
      circleTag.setAttribute("Id", "resetGo");
      circleTag.setAttribute("class", "btn btn-primary w-50");
      let circleButton = document.getElementById("resetGo");
      // if else statement to help hide buttons when not used
      function hidden () {
        if (nextButton.innerText == ""){
            console.log('working');
            nextButton.setAttribute('class', 'd-none btn btn-primary w-50');
        } else {
            console.log('meh')
            console.log(nextButton.innerText);
            nextButton.classList.remove('d-none');
        }
      }
      hidden()
      let addOne = 0;
      // using temp literals to update the text
      function updateText() {
        circleButton.innerText = `${state.pages[addOne].circleButton}`;
        nextButton.innerText = `${state.pages[addOne].nextButton}`;
        h1Section.innerText = `${state.pages[addOne].headerText}`;
        extraTag.innerText = `${state.pages[addOne].extraText}`;
        helpTag.innerText = `${state.pages[addOne].helpText}`;
        
      }
      window.onload = (event) => {
        // console.log("page is fully loaded");
        updateText()
      };
  
      circleButton.addEventListener("click", () => {
        if (circleButton.innerText === "Go") {
          addOne = addOne + 1;
          // console.log(addOne);
          nextButton.classList.remove('d-none');
          
          updateText()
          
          return addOne;
        } else {
          
          addOne = 0;
          updateText()
          nextButton.setAttribute('class', 'd-none btn btn-primary w-50');
          return addOne;
        }
      });
      nextButton.addEventListener("click", () => {
          addOne = addOne + 1;
          // console.log(addOne);
          updateText()
          if(addOne > 4){
          // console.log('page 5')
          hidden()
          }
        return addOne;
      });

    },
  };
  // This is my object, enough said
  state.initFunc();
  