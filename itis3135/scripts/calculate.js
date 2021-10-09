var placeholder = document.getElementById('placeholder');
placeholder.innerHTML = "Calculate";
var firstValue = true;
var value1 = "";
var value2 = "";
var valSwitch = 0;
var currently;
var output;

function updateNum(value){
	var placeholder = document.getElementById('placeholder');
	placeholder.innerHTML = "" + value;
}

function updateSwitch(){
	var placeholder2 = document.getElementById('placeholder2');
	placeholder2.innerHTML = "Current Switch: " + valSwitch;
}

function numAppend(number){
	if(firstValue){
		if(valSwitch == 1){
			value2 = "" + number;
			firstValue = false;
			output = value2;
		}else{
			value1 = "" + number;
			firstValue = false;
			output = value1;
		}
	}else{
		if(valSwitch == 1){
			value2 = "" + value2 + number;
			output = value2;
		}else{
			value1 = "" + value1 + number;
			output = value1;
		}
		
	}
}

function calcFunc(){
	switch(currently){
		case "adding":
			value1 = (parseInt(value1) + parseInt(value2));
			value2 = "";
			updateNum(value1);
			valSwitch = 1;
			updateSwitch();
			currently = "";
			firstValue = true;
			break;
		case "subtracting":
			value1 = (parseInt(value1) - parseInt(value2));
			value2 = "";
			updateNum(value1);
			valSwitch = 1;
			updateSwitch();
			currently = "";
			firstValue = true;
			break;
	}
}

function switchSecond(){
	valSwitch = 1;
	value2 = value1;
	updateNum(value2);
		
	updateSwitch();
	firstValue = true;
}

function equalsFunc(){
	switch(currently){
		case "adding":
			value1 = (parseInt(value1) + parseInt(value2));
			value2 = "";
			updateNum(value1);
			valSwitch = 0;
			updateSwitch();
			currently = "";
			firstValue = true;
			break;
		case "subtracting":
			value1 = (parseInt(value1) - parseInt(value2));
			value2 = "";
			updateNum(value1);
			valSwitch = 1;
			updateSwitch();
			currently = "";
			firstValue = true;
			break;
		case "dividing":
			value1 = (parseInt(value1) / parseInt(value2));
			value2 = "";
			updateNum(value1);
			valSwitch = 1;
			updateSwitch();
			currently = "";
			firstValue = true;
			break;
		case "multiplying":
			value1 = (parseInt(value1) * parseInt(value2));
			value2 = "";
			updateNum(value1);
			valSwitch = 1;
			updateSwitch();
			currently = "";
			firstValue = true;
			break;
		default:
			updateNum(value1);
			valSwitch = 0;
			updateSwitch();
			firstValue = true;
	}
}

function clearFunc(word){
	value1 = "";
	value2 = "";
	output = "" + word;
	valSwitch = 0;
	updateSwitch();
	firstValue = true;
	updateNum(output);
}

var but1 = document.getElementById('button1');
but1.onclick = function(){
	numAppend(1);
	updateNum(output);
}
var but2 = document.getElementById('button2');
but2.onclick = function(){
	numAppend(2);
	updateNum(output);
}
var but3 = document.getElementById('button3');
but3.onclick = function(){
	numAppend(3);
	updateNum(output);
}
var but4 = document.getElementById('button4');
but4.onclick = function(){
	numAppend(4);
	updateNum(output);
}
var but5 = document.getElementById('button5');
but5.onclick = function(){
	numAppend(5);
	updateNum(output);
}
var but6 = document.getElementById('button6');
but6.onclick = function(){
	numAppend(6);
	updateNum(output);
}
var but7 = document.getElementById('button7');
but7.onclick = function(){
	numAppend(7);
	updateNum(output);
}
var but8 = document.getElementById('button8');
but8.onclick = function(){
	numAppend(8);
	updateNum(output);
}
var but9 = document.getElementById('button9');
but9.onclick = function(){
	numAppend(9);
	updateNum(output);
}
var but0 = document.getElementById('button0');
but0.onclick = function(){
	numAppend(0);
	updateNum(output);
}

var butAdd = document.getElementById('buttonAdd');
butAdd.onclick = function(){
	if(valSwitch == 1 && (value2 != "")){
		calcFunc();
	}else{
		switchSecond();
	}
	currently = "adding";
}
var butSub = document.getElementById('buttonSub');
butSub.onclick = function(){
	if(valSwitch == 1 && (value2 != "")){
		calcFunc();
	}else{
		switchSecond();
	}
	currently = "subtracting";
}
var butDiv = document.getElementById('buttonDiv');
butDiv.onclick = function(){
	if(valSwitch == 1 && (value2 != "")){
		calcFunc();
	}else{
		switchSecond();
	}
	currently = "dividing";
}

var butMult = document.getElementById('buttonMult');
butMult.onclick = function(){
	if(valSwitch == 1 && (value2 != "")){
		calcFunc();
	}else{
		switchSecond();
	}
	currently = "multiplying";
}
var butEquals = document.getElementById('buttonEquals');
	butEquals.onclick = function(){
	if(valSwitch == 1 && (value2 != "")){
		equalsFunc();
	}else{
		updateNum(value1);
	}
}
var butClear = document.getElementById('buttonClear');
butClear.onclick = function(){
	clearFunc("Cleared");
}
