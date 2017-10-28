var inquirer = require("inquirer");
var basicQuestions = require("./basicQuestions.json");
var counter = 0; 
var score = 0; 


function BasicCard(question, answer){
  this.question = question;
  this.answer = answer;
};

var askQuestions = function (){
  if(counter < basicQuestions.length){

  inquirer.prompt([
    {type: "input",
      message: basicQuestions[counter].question,
      name: "question"
      }
 ]).then(function(answer){

  var userInput = answer.question.toLowerCase();

    if(userInput === basicQuestions[counter].answer){
          console.log("Correct!");
          score++;
        }

        else{
          console.log("Wrong!");
          console.log(basicQuestions[counter].answer);
        }

  counter++; 
  askQuestions(); 

  });
} 

else{
  console.log("Game Over!")
  console.log("Correct Answers: " + score);
  inquirer.prompt([

      {type: "confirm",
        message: "Do you want to play again?",
        name: "startOver",
        default: true
        }
    ]).then(function(answer){

      if (answer.startOver === true){
        counter = 0;
        score = 0;
        askQuestions(); 
      }
      else{
        console.log("Better luck next time!");
      }
  });
}

};
askQuestions();  