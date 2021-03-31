var submit = document.getElementById("submit");
var input = document.getElementById("input1");
var team1 = document.getElementById('team1');
var team2 = document.getElementById('team2');
var teamArea = document.getElementById('teamArea');
var errorMsg = document.getElementById('errorMsg')
var fairBtn = document.getElementById('fairBtn');
var altBtn= document.getElementById('altBtn');
var randBtn = document.getElementById('randBtn');
var method = "fair";
var names;
fairBtn.style.borderColor = "#99ff99";

submit.onclick = function(){
	errorMsg.style.display = 'none'
	names = [];
	names = input.value.split("\n");
	if(checkInput()){
		createElem()
		teamArea.style.display = "block"
		if (method == "fair") {
			createTeamsFair();
		}
		else if (method == "alt") {
			createTeamsAlt();
		}
		else if (method == "rand") {
			createTeamsRand();
		}
	}
	else {
		////// WARNING MSG
		console.log("I found cheese")
	}
}

// checks inputs ////////////////////
function checkInput(){
	var allowed = true;
	for(i=0; i<names.length; i++){
		names[i] = names[i].trim();
		if(names[i] == "" ) {
			names.splice(i, 1);
		}
	}
	if(names.length%2 != 0){
		errorMsg.style.display = 'block'
		errorMsg.innerHTML = "Het aantal spelers moet een even getal zijn!"
		allowed = false;
	}
	if(names.length > 10){
		errorMsg.style.display = 'block'
		errorMsg.innerHTML = "Je mag maar maximaal 10 spelers toevoegen"
		allowed = false;
	}
	if(names.length == 2){
		errorMsg.style.display = 'block'
		errorMsg.innerHTML = "Je moet minimaal 4 spelers toevoegen"
		allowed = false;
	}
	return allowed
}
//////////////////////////////////////////////////

function createElem(){
	for(i=0; i<(names.length / 2); i++){
		var elem = document.createElement("li");
		team1.appendChild(elem);
		elem.id = "team1persoon"+(i+1);
	}
	for(i=0; i<(names.length / 2); i++){
		var elem = document.createElement("li");
		team2.appendChild(elem);
		elem.id = "team2persoon"+(i+1);
	}
}


/// all the methods //////////////////////////////////////////
function createTeamsFair(){
	// works with 4 and 8 players
	remaningPlayers = [];
	if ((names.length/2)%2 == 0) {
		var persoonIdTeam1 =0;
		var persoonIdTeam2=0;
		var wissel = true;
		var lastPerson = names.length-1;
		for(i=0; i<(names.length / 2); i++){
			if(wissel == true){
				persoonIdTeam1 = persoonIdTeam1 + 1
				document.getElementById('team1persoon'+(persoonIdTeam1)).innerHTML = names[i]
				persoonIdTeam1 = persoonIdTeam1 + 1
				document.getElementById('team1persoon'+(persoonIdTeam1)).innerHTML = names[lastPerson]
				wissel = false
			}
			else {
				persoonIdTeam2 = persoonIdTeam2 + 1
				document.getElementById('team2persoon'+(persoonIdTeam2)).innerHTML = names[i]
				persoonIdTeam2 = persoonIdTeam2 + 1
				document.getElementById('team2persoon'+(persoonIdTeam2)).innerHTML = names[lastPerson]
				wissel = true;
			}
			lastPerson--
		}
	}
	// works with 6 10
	else {
		console.log("method2.2")
		remaningPlayers.push(names[(names.length/2)-1], names[(names.length/2)])
		names.splice((names.length/2)-1, 2);
		var persoonIdTeam1 = 0;
		var persoonIdTeam2 = 0;
		var wissel = true;
		var lastPerson = names.length-1;
		for(i=0; i<(names.length / 2); i++){
			if(wissel == true){
				persoonIdTeam1 = persoonIdTeam1 + 1
				document.getElementById('team1persoon'+(persoonIdTeam1)).innerHTML = names[i]
				persoonIdTeam1 = persoonIdTeam1 + 1
				document.getElementById('team1persoon'+(persoonIdTeam1)).innerHTML = names[lastPerson]
				wissel = false
			}
			else {
				persoonIdTeam2 = persoonIdTeam2 + 1
				document.getElementById('team2persoon'+(persoonIdTeam2)).innerHTML = names[i]
				persoonIdTeam2 = persoonIdTeam2 + 1
				document.getElementById('team2persoon'+(persoonIdTeam2)).innerHTML = names[lastPerson]
				wissel = true;
			}
			lastPerson--
		}
		var randomNumber = Math.floor(Math.random() * 2);
		document.getElementById('team1persoon'+(persoonIdTeam1+1)).innerHTML = remaningPlayers[randomNumber];
		remaningPlayers.splice(randomNumber, 1)
		document.getElementById('team2persoon'+(persoonIdTeam2+1)).innerHTML = remaningPlayers[0];

	}
}
function createTeamsAlt(){
	var persoonIdTeam1 =0;
	var persoonIdTeam2=0;
	for(i=0; i<names.length; i++){
		if(i%2 == 0){
			persoonIdTeam1 = persoonIdTeam1 + 1
			document.getElementById('team1persoon'+(persoonIdTeam1)).innerHTML = names[i]
			console.log('team1persoon'+(i+1))
		}
		else {
			persoonIdTeam2 = persoonIdTeam2 + 1
			document.getElementById('team2persoon'+(persoonIdTeam2)).innerHTML = names[i]
		}
	}
}
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
function createTeamsRand(){
		shuffle(names);
		var count = 0;
	for (i=0; i<(names.length/2); i++) {
			document.getElementById('team1persoon'+(i+1)).innerHTML = names[count]
			count++
		}
	for (i=0; i<(names.length/2); i++) {		
			document.getElementById('team2persoon'+(i+1)).innerHTML = names[count]
			count++	
	}	
}
//////////////////////////////////////////////////////////

// onclicks on buttons in settings ////////////////////////
fairBtn.onclick = function(){
	fairBtn.style.borderColor = "#99ff99";
	altBtn.style.borderColor = "#666666";
	randBtn.style.borderColor = "#666666";
	method = "fair"
}
altBtn.onclick = function(){
	fairBtn.style.borderColor = "#666666";
	altBtn.style.borderColor = "#99ff99";
	randBtn.style.borderColor = "#666666";
	method = "alt"
}
randBtn.onclick = function(){
	fairBtn.style.borderColor = "#666666";
	altBtn.style.borderColor = "#666666";
	randBtn.style.borderColor = "#99ff99";
	method = "rand";
}
////////////////////////////////////
