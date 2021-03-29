var submit = document.getElementById("submit");
var input = document.getElementById("input1");
var team1 = document.getElementById('team1');
var team2 = document.getElementById('team2');
var names;
var allowed = true;

submit.onclick = function(){
	names = input.value.split("\n");
	checkInput()
	if(allowed == true){
		createElem()

	}
	else {
		////// WARNING MSG

	}
	

}
function checkInput(){
	for(i=0; i<names.length; i++){
		names[i] = names[i].trim();
		if(names[i] == "" || names.length%2 != 0 || names.length > 10) {
			allowed = false;
			console.log("I found cheese")
		}
	}
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
