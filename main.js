
var form = document.getElementByid('select-perfect');

form.addEventListenr("submit", function (event) {
	var number = // get value of quantity
	var perfectList = getPerfects();
	displayPerfectList(perfectList)
})



function isPrime(x) {
	// Check is x is prime
        if (x == 2) 
        { return true; }

        if (x%2 == 0)
            { return false; }

        racine = Math.sqrt(x);
        if (Number.isInteger(racine))
            { return false; }
        for (b=3; b<=racine; b+=2)
        {
          if (x%b == 0)
	     { return false; }
        }
        return true;

}


function getPerfects(number) {
	// Create array for storage
	var perfectNumbers = [];

	// We make a boucle for the p value
	for(i = 2; i <= 40; i++ ) {

		first = Math.pow(2, i- 1); 
		second = Math.pow(2, i);
		
		// if first and second are prime we have this form
		// perfect = 2exp(i-1)exp(2exp(i))
		if(isPrime(first) && isPrime(second)){
			perfectNumbers.push( Math.pow(first, second))
		}
		// We have the number of perfect number
		if(perfectNumbers.length == number) {
			// we break the boucle
			break
		}
	}
	return perfectNumbers;
}

function displayPerfectList(argument) {
	// 
}
