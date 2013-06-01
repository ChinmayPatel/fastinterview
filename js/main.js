var app = angular.module("app", []);
var ques = '["Tell me about yourself. ","What are your strengths?","What are your weaknesses?","Why do you want this job?","Where would you like to be in your career five years from now?","What\'s your ideal company?","What attracted you to this company?","Why should we hire you?","What did you like least about your last job?","When were you most satisfied in your job?","What can you do for us that other candidates can\'t?","What were the responsibilities of your last position? ","Why are you leaving your present job?","What do you know about this industry? ","What do you know about our company?","Are you willing to relocate? ","Do you have any questions for me?","Behavioral Interview Questions:","What was the last project you headed up, and what was its outcome?","Give me an example of a time that you felt you went above and beyond the call of duty at work.","Can you describe a time when your work was criticized?","Have you ever been on a team where someone was not pulling their own weight? How did you handle it?","Tell me about a time when you had to give someone difficult feedback. How did you handle it?","What is your greatest failure, and what did you learn from it?","What irritates you about other people, and how do you deal with it?","If I were your supervisor and asked you to do something that you disagreed with, what would you do?","What was the most difficult period in your life, and how did you deal with it?","Give me an example of a time you did something wrong. How did you handle it?","What irritates you about other people, and how do you deal with it?","Tell me about a time where you had to deal with conflict on the job.","If you were at a business lunch and you ordered a rare steak and they brought it to you well done, what would you do?","If you found out your company was doing something against the law, like fraud, what would you do?","What assignment was too difficult for you, and how did you resolve the issue?","What\'s the most difficult decision you\'ve made in the last two years and how did you come to that decision?","What salary are you seeking?","What\'s your salary history?","What are you looking for in terms of career development?","How do you want to improve yourself in the next year?","What kind of goals would you have in mind if you got this job?","If I were to ask your last supervisor to provide you additional training or exposure, what would she suggest?","How would you go about establishing your credibility quickly with the team?","How long will it take for you to make a significant contribution?","What do you see yourself doing within the first 30 days of this job?","If selected for this position, can you describe your strategy for the first 90 days?","How would you describe your work style?","What would be your ideal working environment?","What do you look for in terms of culture -- structured or entrepreneurial?","Give examples of ideas you\'ve had or implemented.","What techniques and tools do you use to keep yourself organized?  ","If you had to choose one, would you consider yourself a big-picture person or a detail-oriented person? ","Tell me about your proudest achievement. ","Who was your favorite manager and why? ","What do you think of your previous boss?","Was there a person in your career who really made a difference?","What kind of personality do you work best with and why? ","What are you most proud of?","What do you like to do? ","What are your lifelong dreams? ","What do you ultimately want to become?","What is your personal mission statement?  ","What are three positive things your last boss would say about you? ","What negative thing would your last boss say about you?","What three character traits would your friends use to describe you?","What are three positive character traits you don\'t have? ","If you were interviewing someone for this position, what traits would you look for? ","Who has impacted you most in your career and how?","What is your greatest fear?","What is your biggest regret and why?  ","What\'s the most important thing you learned in school?","Why did you choose your major? ","What will you miss about your present/last job? ","What is your greatest achievement outside of work? ","What are the qualities of a good leader? A bad leader? ","Do you think a leader should be feared or liked?    ","How do you feel about taking no for an answer? ","How would you feel about working for someone who knows less than you?","How do you think I rate as an interviewer?","Tell me one thing about yourself you wouldn\'t want me to know. ","Tell me the difference between good and exceptional. ","What kind of car do you drive?","There\'s no right or wrong answer, but if you could be anywhere in the world right now, where would you be?","What\'s the last book you read? ","What magazines do you subscribe to?","What\'s the best movie you\'ve seen in the last year? ","What would you do if you won the lottery?","Who are your heroes?","What do you like to do for fun?","What do you do in your spare time?","What is your favorite memory from childhood?","How many times do a clock\'s hands overlap in a day?","How would you weigh a plane without scales?","Tell me 10 ways to use a pencil other than writing.","Sell me this pencil.","If you were an animal, which one would you want to be?","Why is there fuzz on a tennis ball?","If you could choose one superhero power, what would it be and why?","If you could get rid of any one of the US states, which one would you get rid of and why?","With your eyes closed, tell me step-by-step how to tie my shoes."]';

function FastInterviewCtrl( $scope, $http )
{
    $http.get('questions.json').success(function(data) {
        console.info(data);
        // random between 1 and n
        var randomnumber = Math.floor( Math.random() * 100 );
        $scope.question = data[ randomnumber ];
    });

	$scope.counter = 15 + "s";
}

function CounterCtrl( $scope, $timeout )
{
	$scope.counter = 15;
	$scope.error = "alert-info";
	$scope.onTimeout = function(){
		$scope.counter--;
		if ($scope.counter == 0 )
		{
			$timeout.cancel(mytimeout);
			$scope.error = "alert-error"
			// load error page
		}
		else
		{
			mytimeout = $timeout($scope.onTimeout,1000);
		}
    }
	var mytimeout = $timeout($scope.onTimeout,1000);
}

function KeyboardCtrl($scope)
{
	$scope.keyup = function(keyEvent) {
		console.log( 'keyup', keyEvent );
	};
}