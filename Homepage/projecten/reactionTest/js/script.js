var playButton = document.getElementById('playButton');
var resetButton = document.getElementById('resetButton');
var tiem = document.getElementById('tiem');
var nummer = 0
var random; 
var start;

resetButton.style.display = 'none'

playButton.addEventListener("click", test);
function test(){
	playButton.disabled = true;
	playButton.style.backgroundColor = "red";
	playButton.innerHTML = "Wait for green"
	random = Math.floor(Math.random() * 6000);
	setTimeout(function(){
	console.log(random)
	playButton.disabled = false;
	playButton.style.display = 'none'
	resetButton.style.display = 'block'
	timerMS();
}, random);
}

resetButton.onclick = function(){
	playButton.style.display = 'block'
	resetButton.style.display = 'none'
	playButton.disabled = false;
	alert(start)
	test()
}



function timerMS(){
	start = 0;
	kaas = setInterval(function(){
	 start = start + 1
	tiem.innerHTML = start
	}, 1);
}