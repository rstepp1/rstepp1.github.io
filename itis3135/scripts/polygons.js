

function update1(number){
	var placeholder = document.getElementById('placeholder');
	var numOfSides;
	if number(Math.sign(number) == -1){
		number = Math.abs(number));
	}
	number = number.toString();
	switch(number){
		case "1": 
			numOfSides = "Henagon";
			break;
		case "2": 
			numOfSides = "Digon";
			break;
		case "3": 
			numOfSides = "Trigon";
			break;
		case "4": 
			numOfSides = "Tetragon";
			break;
		case "5": 
			numOfSides = "Pentagon";
			break;
		case "6": 
			numOfSides = "Hexagon";
			break;
		case "7": 
			numOfSides = "Heptagon";
			break;
		case "8": 
			numOfSides = "Octagon";
			break;
		case "9": 
			numOfSides = "Enneagon";
			break;
		case "10": 
			numOfSides = "Decagon";
			break;
		default:
			numOfSide = null;
	}
	if(numOfSides != null){
		placeholder.innerHTML = "Your polygon is a  " + numOfSides + "! Congratulations.";
	}else{
		placeholder.innerHTML = "Please enter a valid number";
	}
	
}


var button1 = document.getElementById('checkPolygon');
button1.onclick = function(){
	var poly = prompt("Please enter a value between 1-10");
	update1(poly);
}
