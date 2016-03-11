/*
By: Yuta Okada
Date: March 10th, 2016
*/

function parse () {

	request = new XMLHttpRequest();
	request.open("GET", "data.json", true);  // Make (specify) request
	request.onreadystatechange = callback;  // Handle the response
	request.send(null);  // Send the request

	function callback () {
		if (request.readyState == 4 && request.status == 200) {
			result = "";
			raw = request.responseText;
			theData = JSON.parse(raw);
			elem = document.getElementById("messages");
			for (i = 0; i < theData.length; i++) {
				result += "<p>" + theData[i]["content"] + " " + theData[i]["username"] + "</p>";
			}
			elem.innerHTML = result;
		} 
		else if (request.readyState == 4 && request.status != 200) {
			document.getElementById("messages").innerHTML = "<p> Could not get data. Fail! </p>";
		}
	};
};
