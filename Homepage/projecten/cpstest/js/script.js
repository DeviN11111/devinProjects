var playButton = document.getElementById('playButton')
var scoreText = document.getElementById('score')
var timer = document.getElementById('timer')
var cpsResult = document.getElementById('cps')
var resetButton = document.getElementById('resetButton')
var s5Button = document.getElementById('s5Button') 
var s10Button = document.getElementById('s10Button') 
var s30Button = document.getElementById('s30Button') 
var score = 0;
var amountOfSeconds = 9;
var remainingTimeSEC = amountOfSeconds;
var remainingTimeMS = 9;
var startTimer;


playButton.onclick = function(){
	playButton.innerHTML = "Click as fast as you can!"
	if (score == 0){
		startTimer = setInterval(runtimer, 100)
	}
	score++
	scoreText.innerHTML = "Your score: " + score
	s5Button.disabled = true;
	s10Button.disabled = true;
	s30Button.disabled = true;
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
		cps.innerHTML = "You clicked " + (score / (amountOfSeconds + 1)) +  " CPS";
		resetButton.style.display = 'block'  
		cpsResult.style.display = 'block'
		s5Button.disabled = false;
		s10Button.disabled = false;
		s30Button.disabled = false;                                            
	}
}

resetButton.onclick = function(){
	score = 0;
	remainingTimeSEC = amountOfSeconds;
	remainingTimeMS = 9;
	playButton.innerHTML = "Click Here to start playing"
	playButton.disabled = false;
	resetButton.style.display = 'none'
	cpsResult.style.display='none'
	scoreText.innerHTML = "Your Score: 0"
	timer.innerHTML = "Time: " + (amountOfSeconds + 1)
}

s5Button.onclick = function(){
	timer.innerHTML = "Time: 5"
	remainingTimeSEC = amountOfSeconds = 4;
	s10Button.style.border = 'solid #666666 5px'
	s30Button.style.border = 'solid #666666 5px'
	s5Button.style.border = 'solid #99ff99 5px'
}

s10Button.onclick = function(){
	timer.innerHTML = "Time: 10"
	remainingTimeSEC = amountOfSeconds = 9;
	s10Button.style.border = 'solid #99ff99 5px'
	s30Button.style.border = 'solid #666666 5px'
	s5Button.style.border = 'solid #666666 5px'
}

s30Button.onclick = function(){
	timer.innerHTML = "Time: 30"
	remainingTimeSEC = amountOfSeconds = 29;
	s10Button.style.border = 'solid #666666 5px'
	s30Button.style.border = 'solid #99ff99 5px'
	s5Button.style.border = 'solid #666666 5px'
}