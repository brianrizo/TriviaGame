// hides end game text & button $(document).ready(function(){
	$(".endGame").hide();
	$(".timeLeft").hide();


var	quiz= [
	{question:"Who is the greatest basketball player of all time?",
	answers:["Michael Jordan", "Kobe Bryant", "Lebron James", "Wilt Chamberlin"],
	correctAnswer: "Michael Jordan"},

	{question:"Which of the following jersey numbers did Michael Jordan NEVER wear?",
	answers:["23", "45", "12", "33"],
	correctAnswer: "33"}, 

	{question:"How many NBA championships did Michael Jordan win?",
	answers: ["4", "5", "6", "7"],
	correctAnswer: "6"},

	{question: "How many teams are there in the NBA?",
	answers:["28", "30", "26", "32"],
	correctAnswer: "30"},

	{question: "How many NBA teams does the state of California have?",
	answers: ["3", "4", "2", "5"],
	correctAnswer: "4"},

	{question: "How many games are in an NBA season?",
	answers: ["72", "82", "78", "90"],
	correctAnswer: "82"} 
  
];

// global variables
var counter = 25;
var correctAnswers = 0;
var incorrectAnswers = 0;
var timer;
var index = 0;
var question = $("#question");

console.log(quiz[0].correctAnswer);

// start object
	function viewquestions() {
			if (index === quiz.length) {
				stop();
				results();
				resetGame();
			}else{
			$("#message").hide();
			timer = setInterval(startTimer, 1000);
			$("#answers").html("");
			question.html(quiz[index].question);
			for (i = 0; i < quiz[index].answers.length; i++) {
    		// var answers = quiz[index].answers[i];
    		$('#answers').append("<li>" + quiz[index].answers[i] + "</li>"); 
      		}
       		$("button").hide();
       		checkAnswers();
       	}
	 } //view questions

	function checkAnswers() {
			$("#answers li").on("click", function(){
				if($(this).text() === quiz[index].correctAnswer){
					stop();
					correctAnswers++;
					console.log(correctAnswers);
					$("#message").html("Awesome, you were right!"+"<br>"+"<br>"+"<img src = assets/images/jordan-win.gif>").show();
					next();
				} else {
					stop();
					incorrectAnswers++;
					console.log(incorrectAnswers);
					$("#message").html("Sorry, you were wrong!"+"<br>"+"<br>"+"<img src = assets/images/crying-jordan.gif>").show(); 
					next();
				}
			});
	} //check answers

	function next() {
			index++;
			$("question").hide();
			$("#answers").empty();
			setTimeout(viewquestions, 3000);

	} //next question trigger

	function stop(){
			clearInterval(timer);

	}// stop timer

	function results(){	
			$("#question").hide();
			$(".timeLeft").hide();
			$(".endGame").show();
			$("#answers").hide();
			$("#message").hide();
			$('.correct').html(correctAnswers);
			$('.incorrect').html(incorrectAnswers);
			$(".playAgain").show();
	}// results

	function startTimer(){
		    counter--;
	      	$(".count").html(counter);
	    	if (counter === 0) {
	        	alert('Shot Clock Violation!');
	        	stop();
	        	results();
	        	resetGame();
	    }
	  
	} //start timer 


// on-clicks

// start game
	$("#startGame").click(function(){
    	startTimer();
    	viewquestions();
    	$(".timeLeft").show(); 
    
 });
// reset game
function resetGame(){
	$(".playAgain").click(function(){
		$(".endGame").hide();
		correctAnswers = 0;
		incorrectAnswers = 0;
		counter = 25;
		index = 0;
		question.show();
		$("#answers").show();
		viewquestions();
		$(".timeLeft").show();
	

});
};

