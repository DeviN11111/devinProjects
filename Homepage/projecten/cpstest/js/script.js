var playButton = document.getElementById('playButton')
var scoreText = document.getElementById('score')
var timer = document.getElementById('timer')
var cpsResult = document.getElementById('cps')
var resetButton = document.getElementById('resetButton')
var s5Button = document.getElementById('s5Button') 
var s10Button = document.getElementById('s10Button') 
var s30Button = document.getElementById('s30Button') 
var score = 0;
var remainingTimeSEC = 9;
var remainingTimeMS = 9;
var startTimer;


playButton.onclick = function(){
	playButton.innerHTML = "Click as fast as you can!"
	if (score == 0){
		startTimer = setInterval(runtimer, 100)
	}
	score++
	scoreText.innerHTML = "Your score: " + score
}

function runtimer (){
	timer.innerHTML = "Time: "+ remainingTimeSEC+"." + remainingTimeMS
	remainingTimeMS = remainingTimeMS - 1
	if(remainingTimeMS == -1){
		remainingTimeSEC--
		remainingTimeMS = 9
	}
	if (remainingTimeSEC==-1){
		clearInterval(startTimer)
		playButton.disabled = true;
		cps.innerHTML = "You clicked " + (score / 10) +  " CPS";
		resetButton.style.display = 'block'  
		cpsResult.style.display = 'block'                                            
	}
}

resetButton.onclick = function(){
	score = 0;
	remainingTimeSEC = 9;
	remainingTimeMS = 9;
	playButton.innerHTML = "Click Here to start playing"
	playButton.disabled = false;
	resetButton.style.display = 'none'
	cpsResult.style.display='none'
	scoreText.innerHTML = "Your Score: 0"
	timer.innerHTML = "Time: 10"


}