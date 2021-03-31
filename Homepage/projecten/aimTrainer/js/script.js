var aimTrainerStart = document.getElementById("AimTrainerStart");
var AimTrainerScore = document.getElementById("AimTrainerScore");
var AimTrainerAcc = document.getElementById("AimTrainerAcc");
var AimTrainerTime = document.getElementById("AimTrainerTime");
var divTarget = document.getElementById("divTarget");
var aimTrainerContent = document.getElementById('aimTrainerContent');
var amountOfSeconds = 29;
var remainingTimeSEC = amountOfSeconds;
var remainingTimeMS = 9;
var startTimer;
var score=0;
var stopTimer;

aimTrainerContent.onclick = function(){
	
}
aimTrainerStart.onclick = function(){
	divTarget.style.left = Math.floor(Math.random() * 100)+"%"
	divTarget.style.top = Math.floor(Math.random() * 100)+"%"
	aimTrainerStart.style.display = 'none'
	divTarget.style.display = 'block'
	AimTrainerScore.innerHTML = 'Score: 0'
	stopTimer = setInterval(runtimer, 100)
}

divTarget.onclick = function(){
	var randomX = Math.floor(Math.random() * 100)
	var randomY = Math.floor(Math.random() * 100)
	divTarget.style.left = (randomX+"%")
	divTarget.style.top = (randomY+"%")
	score++
	AimTrainerScore.innerHTML = "Score:" + score
}

function runtimer (){
	AimTrainerTime.innerHTML = "Time: "+ remainingTimeSEC+"." + remainingTimeMS
	remainingTimeMS = remainingTimeMS - 1
	if(remainingTimeMS == -1){
		remainingTimeSEC--
		remainingTimeMS = 9
	}
	if (remainingTimeSEC==-1){
		AimTrainerTime.innerHTML = "Time: 0"
		clearInterval(stopTimer)
		gameOver()
	}
		
}

function gameOver(){
	aimTrainerStart.style.display = 'block'
	divTarget.style.display = 'none'
	amountOfSeconds = 29;
	remainingTimeSEC = amountOfSeconds;
	score= 0;
}