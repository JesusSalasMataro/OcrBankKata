exports.parse = function (account) {
	if (account.length === 12) {
		return stringToNumber(account);		
	}
	else {
		var digits = '';
		var numDigits = account.length / 12;
		var numLines = 4;
		
		for (var i=0; i<numDigits; i++) {
			var digit = '';
			var stringPosition = 0;
			
			for (var j=0; j<numLines; j++) {
				stringPosition = 3 * numDigits * j + 3 * i;
				digit += account.substr(stringPosition, 3);				
			}
			
			digits += stringToNumber(digit);	
		}
		
		return digits;	
	}
};

function stringToNumber (account) {
	if (account == ' _ | ||_|   ') {
		return '0';
	}
	else if (account == '     |  |   ') {
		return '1';	
	}
	else if (account == ' _  _||_    ') {
		return '2';	
	}
	else if (account == ' _  _| _|   ') {
		return '3';	
	}
	else if (account == '   |_|  |   ') {
		return '4';	
	}
	else if (account == ' _ |_  _|   ') {
		return '5';	
	}
	else if (account == ' _ |_ |_|   ') {
		return '6';	
	}
	else if (account == ' _   |  |   ') {
		return '7';	
	}
	else if (account == ' _ |_||_|   ') {
		return '8';	
	}
	
	return '9';	
}



