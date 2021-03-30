var submit = document.getElementById("submit");
var input = document.getElementById("input1");
var team1 = document.getElementById('team1');
var team2 = document.getElementById('team2');
var names;


submit.onclick = function(){
	names = input.value.split("\n");
	

	if(checkInput()){
		createElem()
		createTeamsMethod2()


	}
	else {
		////// WARNING MSG
		console.log("I found cheese")
	}
}

function checkInput(){
	var allowed = true;
	for(i=0; i<names.length; i++){
		names[i] = names[i].trim();
		if(names[i] == "" || names.length%2 != 0 || names.length > 10 || names.length == 2) {
			allowed = false;	
		}
	}
	return allowed
}

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

function createTeamsMethod1(){
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
function createTeamsMethod2(){
	// maakt team 1
	// names = [ "Devin", "Nick", "Koes", "Levi", "Kood", "kaser"]
	var staticLength = names.length/2;
	for (i=0; i<staticLength; i++) {
		document.getElementById('team1persoon'+(i+1)).innerHTML = names[0]
		names.splice(0, 1);
		names.reverse();
	}
}