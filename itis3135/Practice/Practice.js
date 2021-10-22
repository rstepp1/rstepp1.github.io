var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {
	
	
	
	var totalMoney = 0;
	document.getElementById("esp").onclick=function(){
		document.getElementById("order").append('$1.95 - Espresso - Delicious espresso. Wanna try it?');
		totalMoney = (parseFloat(totalMoney) + parseFloat(1.95)).toFixed(2);
		document.getElementById("total").innerHTML="<em>Total: $" + totalMoney + " </em>";
	};

	document.getElementById("cap").onclick=function(){
		document.getElementById("order").append('$3.45 - Cappuccino - Delicious Cappuccino.');
		totalMoney = (parseFloat(totalMoney) + parseFloat(3.45)).toFixed(2);
		document.getElementById("total").innerHTML="<em>Total: $" + totalMoney + " </em>";
	};

	// for click event add item to order and update total
	
	// display order and total
	
	
		
}; // end onload