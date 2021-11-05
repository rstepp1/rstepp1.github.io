

function update1(){
	var placeholder = document.getElementById('placeholder');
	var fName = document.getElementById('fname').value;
	var lName = document.getElementById('lname').value;
	var phone = document.getElementById('pnum').value;
	var address = document.getElementById('add').value;
	var email = document.getElementById('email').value;
	
	placeholder.innerHTML = "Name:  " + fName + " "+ lName + "<br>" + "Phone Number: " + phone + "<br>" + "Address: " + address + "<br>" + "Email: " + email;
}

var submitButton = document.getElementById('submit');
submitButton.onclick = function(){
	update1();
}