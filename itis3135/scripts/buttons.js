var totalTreasure = 0;

var seek = {
	chances: 20,
	roll: function(){
		var randomNumber = Math.floor(Math.random() * this.chances) + 1;
		totalTreasure += randomNumber;
		return randomNumber;
	}
}

function taxing(){
    var taxPercent = prompt("How much are the crabs asking for? (Input your percentage as a whole number, ex. 10% = 10)")
	taxPercent = taxPercent * .01;
	taxPercent = parseFloat(taxPercent);
	return totalTreasure * taxPercent;
}

function calcMPG(){
	var miles = prompt("How many miles have you boated?");
	miles = parseFloat(miles);
	var gallons = prompt("Enter how many gallons you used: ");
	gallons = parseFloat(gallons);
	var mpg = miles/gallons;
	mpg = parseFloat(mpg);
	return mpg;
}


function update1(number){
	var placeholder = document.getElementById('placeholder');
	placeholder.innerHTML = "You found " + number + " pieces of treasure! Your total is now " + totalTreasure;
}
function update2(){
	totalTreasure++;
	var placeholder = document.getElementById('placeholder');
	placeholder.innerHTML = "Congrats on finding a treasure! Your total was " + (totalTreasure - 1) + ", but is now " + totalTreasure;
}
function update3(number){
	totalTreasure -= number;
	var placeholder = document.getElementById('placeholder');
	placeholder.innerHTML = "The crabs took " + number + " pieces , your total treasure is now " + totalTreasure;
}
function update4(number){
	var placeholder = document.getElementById('placeholder');
	placeholder.innerHTML = "Looks like ol' bessie is running at about " + number + " miles per gallon, hope she'll make the rest of the trip!";
}
function update5(){
	var placeholder = document.getElementById('placeholder');
	if(totalTreasure < 10){
		placeholder.innerHTML = "You have " + totalTreasure + " doubloons, pathetic!";
	}else if(totalTreasure < 50){
		placeholder.innerHTML = "You have " + totalTreasure + " doubloons, a sizable amount, go out and find some more!";
	}else{
		placeholder.innerHTML = "You have " + totalTreasure + " doubloons, the seas have been kind!";
	}
	
}

var button1 = document.getElementById('goldHunt');
button1.onclick = function(){
	var rolled = seek.roll();
	update1(rolled);
}
var button2 = document.getElementById('moreGold');
button2.onclick = function(){
	update2();
}
var button3 = document.getElementById('crabTax');
button3.onclick = function(){
	var tax = taxing();
	update3(tax);
}
var button4 = document.getElementById('shipMPG');
button4.onclick = function(){
	var milesPer = calcMPG();
	update4(milesPer);
}
var button5 = document.getElementById('checking');
button5.onclick = function(){
	update5();
}