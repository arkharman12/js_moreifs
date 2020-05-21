/**********
TITLE: More Ifs
AUTHOR: Harmanjot Singh (HS)
PURPOSE: More Ifs Lab
ORIGINALLY CREATED ON: 7 Feb 2019
LAST MODIFIED ON: 7 Feb 2019
LAST MODIFIED BY: Harmanjot Singh (HS)
MODIFICATION HISTORY: Original Build
**********/

$(document).ready(function(){
    var elResponse = document.getElementById("echo"); //grabbing the HTML id element so I can work with it
    var strQuestionOne = "What is your current latitude?"; //default prompt question
    var strDefaultAnsOne = "Enter a value between -180 and 180"; //default prompt answer
    var strAnswerOne = ""; //user's answer will be stored here but empty for now
    strAnswerOne = prompt(strQuestionOne, strDefaultAnsOne); //finally storing the user's answer
    var intAnswerOne = parseInt(strAnswerOne); //converting the answer to an integer and storing it

    var strQuestionTwo = "What is your current longitude?"; //default prompt question
    var strDefaultAnsTwo = "Enter a value between -180 and 180"; //default prompt answer
    var strAnswerTwo = ""; //user's answer will be stored here but empty for now
    strAnswerTwo = prompt(strQuestionTwo, strDefaultAnsTwo); //finally storing the user's answer
    var intAnswerTwo = parseInt(strAnswerTwo); //converting the answer to an integer and storing it

    var strQuestionThree = "What is your current destination latitude?"; //default prompt question
    var strDefaultAnsThree = "Enter a value between -180 and 180"; //default prompt answer
    var strAnswerThree = ""; //user's answer will be stored here but empty for now
    strAnswerThree = prompt(strQuestionThree, strDefaultAnsThree); //finally storing the user's answer
    var intAnswerThree = parseInt(strAnswerThree); //converting the answer to an integer and storing it

    var strQuestionFour = "What is your current destination longitude?"; //default prompt question
    var strDefaultAnsFour = "Enter a value between -180 and 180"; //default prompt answer
    var strAnswerFour= ""; //user's answer will be stored here but empty for now
    strAnswerFour = prompt(strQuestionFour, strDefaultAnsFour); //finally storing the user's answer
    var intAnswerFour = parseInt(strAnswerFour); //converting the answer to an integer and storing it

    //printing user's answers to the page
    elResponse.innerHTML = "Your current latitude value is " + strAnswerOne + "<br>";
    elResponse.innerHTML += "Your current longitude value is " + strAnswerTwo + "<br>";
    elResponse.innerHTML += "Your current destination latitude value is " + strAnswerThree + "<br>";
    elResponse.innerHTML += "Your current destination longitude value is " + strAnswerFour + "<br><br>";

    //using if else statements to decides what direction should user head on in response to what they have entered
    var elResponseTwo = document.getElementById("ifElse"); //grabbing the HTML id element so I can work with it
    var caseOne = "Head North East";
    var caseTwo = "Head North West";
    var caseThree = "Head South West";
    var caseFour = "Head South East";
    if (intAnswerOne <= intAnswerThree && intAnswerTwo <= intAnswerFour) {
        elResponseTwo.textContent = caseOne;
    }
    else if (intAnswerOne <= intAnswerThree && intAnswerTwo >= intAnswerFour) {
        elResponseTwo.textContent = caseTwo;
    }
    else if (intAnswerOne >= intAnswerThree && intAnswerTwo >= intAnswerFour) {
        elResponseTwo.textContent = caseThree;
    } 
    else if (intAnswerOne >= intAnswerThree && intAnswerTwo <= intAnswerFour) {
        elResponseTwo = caseFour;
    } 
    else {
        elResponseTwo.textContent = "Land Ho!"
    } // end if

    //doing the same thing just with the switch statement this time
    var elResponseThree = document.getElementById("caseSwitch"); //grabbing the HTML id element so I can work with it
    var expression = true;
    switch(expression) {
        case (intAnswerOne <= intAnswerThree && intAnswerTwo <= intAnswerFour):
            elResponseThree.textContent = caseOne;
            break;
        case (intAnswerOne <= intAnswerThree && intAnswerTwo >= intAnswerFour):
            elResponseThree.textContent = caseTwo;
            break;
        case (intAnswerOne >= intAnswerThree && intAnswerTwo >= intAnswerFour):
            elResponseThree.textContent = caseThree;
            break;
        case (intAnswerOne >= intAnswerThree && intAnswerTwo <= intAnswerFour):
            elResponseThree.textContent = caseFour;
            break;
        default:
          elResponseThree.textContent = "Land Ho!";
      } // end switch

}); 