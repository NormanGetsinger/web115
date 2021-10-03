function getData() {
	let firstName = document.getElementById('firstName').value;
	let lastName = document.getElementById('lastName').value;
	let middleInitial = document.getElementById('middleInitial').value;
  //How to get the getElementbyID to work //
  document.getElementById("user_input").textContent = "Welcome to Mr.G's Asian Kitchen, " + firstName + " " + middleInitial + " . " + 
	lastName + "!"; 
	let howHigh = prompt(`How high do you want to count, ${firstName}?`);
	user_entry(howHigh);
		}
    
    function user_entry(counter) {
    	
      for(let i = 0; i <= counter; i++) {
        var evenOrOdd = 'foodie';
        console.log("number is" + i);
      if (i % 15 === 0) {
      	evenOrOdd = 'Sushi Pho!';
        console.log(i + "is divisible by 15");
			} else if (i % 3 === 0) { //might change this to show a divisible portion
				console.log(i + "is divisible by 3");
				evenOrOdd = 'Sushi!';
			} else if (i % 5 === 0) {
   			console.log(i + "is divisible by 5");
        evenOrOdd = 'Pho!';
     	} 
     // the && must come in somewhere
		if (i === 141) { // does this break the loop at 100? must break at 140
			break;
		}
  var newEl = document.createElement('li'); 
  var newText = document.createTextNode(i + ' Mr.Gs asian kitchen '  + evenOrOdd);
  newEl.appendChild(newText); 
  var position = document.getElementsByTagName('ul')[0];
  position.appendChild(newEl); 
    
	}
       
    
}
/* I need to have this in the next fizz_buzz_1. have a list print a word.
	I need to modify code so that it says a word everytime the counter is divisible
	by 3 and do the same if both are divisible by 5. 
	 */
	
