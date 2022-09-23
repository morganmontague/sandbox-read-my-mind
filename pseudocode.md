# Mind Reader
The mind reader game leads the chump through a math trick by initially having them pick a number and follow steps on various pages or states. At the end of the game the webpage sucessfully picks the number. Added from my notebook and edited.

## OBJ/Var
- State - object containing everything that will show up on the screen for each page, shouldn't have done it like this
    - Pages - array with objects inside, containing the text
        * headerText - an h1 string, main important text
        * nextButtonn - string in the button, next is hidden at first
        * helpText - string of helping text
        * extraText - has additional helful text or examples of how to do simple math
        * circleButton - button with string in it, starts as go then is changed to reset
        * page number - a number for each state, used to call the current page
    - symbolArr - array - holds symbols for the state, starts with just 
    - NumberArr - array - symbols after being passed through "randomize" function and joins with symbolArr
    - answerSym - string - holds answer symbol

## FUNC
* initFunc() - calls up values to populate html elements and calls other functions
* updateText() - called on button clicks to change html elements to the next page next page, controlled by addOne
    * used window load as well
* symFunc() - "randomizes" symbols, runs loop to populate symbols for numbers 0-99 and stores it in randSym. Stores answer
    * Did not get to add this due to time, wanted to read up the wanted to read the fisher-yates way
* hidden() - attached to buttons, adds the bootstrap class to hide elements d-none 

## PROCEDURE

WHEN a user loads the page
    initFunc runs and loads elements into html for page number 0
    symFunc runs and creates and stores aymbolArr, numberArr, answerSym

IF user clicks on circleButton
    updateText and load window runs and removes current html content and replaces it with pages content for page number 1,
    (changes circleButton text value to reset and removes the d-none from Next button with if else statement)
    increases page number value by addOne

IF user clicks on nextButton
    updateText and load window runs and removes current html content and replaces it with pages content for page number 2
    increases page number value by addOne

IF user clicks on nextButton
    updateText and load window runs and removes current html content and replaces it with pages content for page number 3
    increases page number value by addOne

IF user clicks on nextButton
    updateText and load window runs and removes current html content and replaces it with pages content for page number 4
    increases page number value by addOne
    

IF user clicks on nextButton
    updateText and load window runs and removes current html content and replaces it with pages content for page number 5
    increases page number value by addOne
    (hides nextButton)

IF user clicks on circleButton
    This will trigger the an if else statement that will only trigger if circleButton is clicked if addOne is greater than one and will set it back to zero restarting the state.