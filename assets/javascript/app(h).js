var qNum = 0;
var numCorrect = 0;
var numWrong = 0;
var timer = 16;
var questions = [
    {
        question: "What year did America acquire the Louisiana Territory through the Lousiana Purchase from France?",
        answers: ["1803", "1790", "1824", "1849"],
        correctAnswer: "1803",
    },

    {
        question: "Who's assassination is credited with starting WWI?",
        answers: ["Prince Phillip of Germany", "Archduke Franz Ferdinand", "John F. Kennedy", "Baron Gavrilo Princip"],
        correctAnswer: "Archduke Franz Ferdinand",
    },

    {
        question: "Who was the only president to be elected for two non-consecutive terms?",
        answers: ["George Bush", "William Taft", "John Quincy Adams", "Grover Cleveland"],
        correctAnswer: "Grover Cleveland",
    },

    {
        question: "Which law of thermodynamics states that the entropy of an isolated system cannot decrease over time?",
        answers: ["Zeroth", "First", "Second", "Third"],
        correctAnswer: "Second",
    },

    {
        question: "Acceleration is the _______ of velocity.",
        answers: ["Integral", "Derivative", "Square", "Square root"],
        correctAnswer: "Derivative",
    },

    {
        question: "Who was the French soccer star who recieved a red card in extra time in the 2006 World Cup finals for headbutting his opponent?",
        answers: ["Zinedine Zidane", "Marco Materazzi", "Charles de Gaul", "Thierry Henry"],
        correctAnswer: "Zinedine Zidane",
    },

    {
        question: "Which of the following is not written by Fyodor Dostoyevsky?",
        answers: ["Crime and Punishment", "The Brothers Karamazov", "The Idiot", "War and Peace"],
        correctAnswer: "War and Peace",
    },

    {
        question: "What is the capital of Bangaladesh?",
        answers: ["Dhaka", "Naypyidaw", "Phnom Penh", "Ho Chi Minh City"],
        correctAnswer: "Dhaka",
    }
];

function question() {
    $("#question1").html(questions[qNum].question + "<div>" + "<button type='button' class='btn btn-primary' value='" + questions[qNum].answers[0] + "'>" + questions[qNum].answers[0] + "</button>" + "</div>" + "<div>" + "<button type='button' class='btn btn-primary' value='" + questions[qNum].answers[1] + "'>" + questions[qNum].answers[1] + "</button>" + "</div>" + "<div>" + "<button type='button' class='btn btn-primary' value='" + questions[qNum].answers[2] + "'>" + questions[qNum].answers[2] + "</button>" + "</div>" + "<div>" + "<button type='button' class='btn btn-primary' value='" + questions[qNum].answers[3] + "'>" + questions[qNum].answers[3] + "</button>" + "</div>");
}

$(document).on("click", ".btn", function () {
    if ($(this).val() === questions[qNum].correctAnswer) {
        numCorrect++;
        qNum++;
        checkWin();
        question();
        timer = 16;
        timer--;
        $(".timer").html("Time left: " + timer);
    } else {
        numWrong++;
        qNum++;
        checkWin();
        question();
        timer = 16;
        timer--;
        $(".timer").html("Time left: " + timer);
    }
    console.log(numCorrect);
    console.log(numWrong);
    console.log(qNum);
});

function resetTimer() {
    checkWin();
    var timeInterval = setInterval(function () {
        timer--;
        $(".timer").html("Time left: " + timer);
        if (timer === 0) {
            numWrong++;
            qNum++;
            checkWin();
            clearInterval(timeInterval);
            question();
            timer = 16;
            resetTimer();
        }
    }, 1000)
}

function checkWin (){
    if (qNum > 7) {
        $("body").empty();
        $("body").html("<h1>You answered " + numCorrect + " right and " + numWrong + " wrong.</h1>");
    }
}

question();
resetTimer();
