


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
        var evenOrOdd;
        
if (i % 2 === 0) {
         evenOrOdd = 'the number is even';
        } else {
        evenOrOdd = 'the number is odd';
        }
        var newEl = document.createElement('li');
        
        var newText = document.createTextNode(i + ' Mr.Gs asian kitchen '  + evenOrOdd);
        
        newEl.appendChild(newText);
        
        var position = document.getElementsByTagName('ul')[0];
        
        position.appendChild(newEl);
        
        
      }
    
    }