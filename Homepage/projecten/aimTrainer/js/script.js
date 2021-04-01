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
var hits= 0;
var stopTimer;
var misses= -1;
var hits;
var fullAccuracy = 0;
///////// MISS APARTE FUNCTIE ACCURACY \/
aimTrainerContent.onclick = function(){
	misses++       ///DIT IS JE MISSES
	fullAccuracy = (hits / misses* 100)
	if (fullAccuracy >= 100){
		fullAccuracy = 100
		AimTrainerAcc.innerHTML = "Accuracy: 100%"
	}
	AimTrainerAcc.innerHTML = "Accuracy: " + Math.round(fullAccuracy) + "%"
	if(misses == 0){
		AimTrainerAcc.innerHTML = "Accuracy: 100%"
	}
}
aimTrainerStart.onclick = function(){
	divTarget.style.left = Math.floor(Math.random() * 100)+"%"
	divTarget.style.top = Math.floor(Math.random() * 100)+"%"
	aimTrainerStart.style.display = 'none'
	divTarget.style.display = 'block'
	AimTrainerScore.innerHTML = 'Hits: 0'
	stopTimer = setInterval(runtimer, 100)
}

divTarget.onclick = function(){
	var randomX = Math.floor(Math.random() * 100)
	var randomY = Math.floor(Math.random() * 100)
	divTarget.style.left = (randomX+"%")
	divTarget.style.top = (randomY+"%")
	hits++
	AimTrainerScore.innerHTML = "Hits: " + hits
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
	hits= 0;
}