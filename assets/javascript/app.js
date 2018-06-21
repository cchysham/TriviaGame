/*var questions = {
    q1: "What year did America buy the Lousiana Purchase from France?",
    a1: ["1805", "1790", "1820", "1850"],
    q2: "Which royal's assassination is credited with starting WWI?",
    a2: ["Prince Phillip", "Archduke Franz Ferdinand", "Richard the Lionheart", "Baron Gavrilo Princip"],
};*/
var questions = [];
var question1 = "What year did America acquire the Louisiana Territory through the Lousiana Purchase from France?";
var answers1 = ["1803", "1790", "1824", "1849"];
var question2 = "Who's assassination is credited with starting WWI?";
var answers2 = ["Prince Phillip of Germany", "Archduke Franz Ferdinand", "John F. Kennedy", "Baron Gavrilo Princip"];
var question3 = "Who was the only president to be elected for two non-consecutive terms?";
var answers3 = ["George Bush", "William Taft", "John Quincy Adams", "Grover Cleveland"];
var question4 = "Which law of thermodynamics states that the entropy of an isolated system cannot decrease over time?";
var answers4 = ["Zeroth", "First", "Second", "Third"];
var question5 = "Acceleration is the _______ of velocity."
var answers5 = ["Integral", "Derivative", "Square", "Square root"];
var question6 = "Who was the French soccer star who recieved a red card in extra time in the 2006 World Cup finals for headbutting his opponent?";
var answers6 = ["Zinedine Zidane", "Marco Materazzi", "Charles de Gaul", "Thierry Henry"];
var question7 = "Which of the following is not written by Fyodor Dostoyevsky?";
var answers7 = ["Crime and Punishment", "The Brothers Karamazov", "The Idiot", "War and Peace"];
var question8 = "What is the capital of Bangaladesh?";
var answers8 = ["Dhaka", "Naypyidaw", "Phnom Penh", "Ho Chi Minh City"];
var qAnswered = false;

function endGame() {
    $(".container").empty();
    $(".container").html("<h1><b>You got "+ correct +" right and " + incorrect + " wrong.</b></h1>");
}


var timeLeft = 60;

function timer() {
   setTimeout(endGame, 60000);
   setInterval(decrement, 1000);
}
timer();

function decrement() {
    timeLeft--;
    $(".timer").html("Time left: " + timeLeft);
  }

function display () {

}





/*

function display(question, answer) { //questions.q1, questions.a1[i]
    $("#question1").html(question);
    $("#a1").html(answers1[0]);
    $("#a2").html(answers1[1]);
    $("#a3").html(answers1[2]);
    $("#a4").html(answers1[3]);
    qAnswered =false;
}

function answerSelection1() {
    $("#a1").on("click", function() {
        alert("Correct!");
        qAnswered = true;
    });
    $("#a2").on("click", function() {
        alert("Wrong.");
        qAnswered = true;
    });
    $("#a3").on("click", function() {
       alert("Wrong.");
       qAnswered = true;
    });
    $("#a4").on("click", function() {
        alert("Wrong.");
        qAnswered = true;
    });
}

function answerSelection2() {
    $("#a1").on("click", function() {
        alert("Wrong.");
        qAnswered = true;
    });
    $("#a2").on("click", function() {
        alert("Correct!");
        qAnswered = true;
    });
    $("#a3").on("click", function() {
       alert("Wrong.");
       qAnswered = true;
    });
    $("#a4").on("click", function() {
        alert("Wrong.");
        qAnswered = true;
    });
}


function timeUp() {
    if (qAnswered === false){
        alert("Time's up!");
        qAnswered = true;
    }
    
}
setTimeout(timeUp, 15000);
display(question1, answers1);
answerSelection1();
if (qAnswered === true) {
    display(question2, answers2);
}
*/
var correct = 0;
var incorrect = 0;

$("#question1").html(question1);
$("#a1").html(answers1[0]);
$("#a2").html(answers1[1]);
$("#a3").html(answers1[2]);
$("#a4").html(answers1[3]);

$(".a1").on("click", function() {
    correct++;
    console.log(correct);
console.log(incorrect);
});
$(".a2").on("click", function() {
    incorrect++;
    console.log(correct);
console.log(incorrect);
});
$(".a3").on("click", function() {
    incorrect++;
   qAnswered = true;
});
$(".a4").on("click", function() {
    incorrect++;
    qAnswered = true;
});
console.log(correct);
console.log(incorrect);
$("#question2").html(question2);
$("#b1").html(answers2[0]);
$("#b2").html(answers2[1]);
$("#b3").html(answers2[2]);
$("#b4").html(answers2[3]);

$(".b1").on("click", function() {
    incorrect++;
    qAnswered = true;
    console.log(correct);
console.log(incorrect);
});
$(".b2").on("click", function() {
    correct++;
    qAnswered = true;
});
$(".b3").on("click", function() {
    incorrect++;
   qAnswered = true;
});
$(".b4").on("click", function() {
    incorrect++;
    qAnswered = true;
});

$("#question3").html(question3);
$("#c1").html(answers3[0]);
$("#c2").html(answers3[1]);
$("#c3").html(answers3[2]);
$("#c4").html(answers3[3]);

$(".c1").on("click", function() {
    incorrect++;
    qAnswered = true;
});
$(".c2").on("click", function() {
    incorrect++;
    qAnswered = true;
});
$(".c3").on("click", function() {
    incorrect++;
   qAnswered = true;
});
$(".c4").on("click", function() {
    correct++;
    qAnswered = true;
});

$("#question4").html(question4);
$("#d1").html(answers4[0]);
$("#d2").html(answers4[1]);
$("#d3").html(answers4[2]);
$("#d4").html(answers4[3]);

$(".d1").on("click", function() {
    incorrect++;
    qAnswered = true;
});
$(".d2").on("click", function() {
    incorrect++;
    qAnswered = true;
});
$(".d3").on("click", function() {
    correct++;
   qAnswered = true;
});
$(".d4").on("click", function() {
    incorrect++;
    qAnswered = true;
});

$("#question5").html(question5);
$("#f1").html(answers5[0]);
$("#f2").html(answers5[1]);
$("#f3").html(answers5[2]);
$("#f4").html(answers5[3]);

$(".f1").on("click", function() {
    incorrect++;
    qAnswered = true;
});
$(".f2").on("click", function() {
    correct++;
    qAnswered = true;
});
$(".f3").on("click", function() {
    incorrect++;
   qAnswered = true;
});
$(".f4").on("click", function() {
    incorrect++;
    qAnswered = true;
});

$("#question6").html(question6);
$("#g1").html(answers6[0]);
$("#g2").html(answers6[1]);
$("#g3").html(answers6[2]);
$("#g4").html(answers6[3]);

$(".g1").on("click", function() {
    correct++;
    qAnswered = true;
});
$(".g2").on("click", function() {
    incorrect++;
    qAnswered = true;
});
$(".g3").on("click", function() {
    incorrect++;
   qAnswered = true;
});
$(".g4").on("click", function() {
    incorrect++;
    qAnswered = true;
});

$("#question7").html(question7);
$("#h1").html(answers7[0]);
$("#h2").html(answers7[1]);
$("#h3").html(answers7[2]);
$("#h4").html(answers7[3]);

$(".h1").on("click", function() {
    incorrect++;
    qAnswered = true;
});
$(".h2").on("click", function() {
    incorrect++;
    qAnswered = true;
});
$(".h3").on("click", function() {
    incorrect++;
   qAnswered = true;
});
$(".h4").on("click", function() {
    correct++;
    qAnswered = true;
});

$("#question8").html(question8);
$("#i1").html(answers8[0]);
$("#i2").html(answers8[1]);
$("#i3").html(answers8[2]);
$("#i4").html(answers8[3]);

$(".i1").on("click", function() {
    correct++;
    qAnswered = true;
});
$(".i2").on("click", function() {
    incorrect++;
    qAnswered = true;
});
$(".i3").on("click", function() {
    incorrect++;
   qAnswered = true;
});
$(".i4").on("click", function() {
    incorrect++;
    qAnswered = true;
});

$("button").on("click", function() {
    endGame();
})
    
