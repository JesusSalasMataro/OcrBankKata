exports.parse = function (account) {
	var digits = '';
	var numDigits = account.length / 12;
	
	for (var i=0; i<numDigits; i++) {
		var digit = '';
		
		digit += account.substr(3 * i, 3);
		digit += account.substr(3 * numDigits + 3 * i, 3);
		digit += account.substr(3 * numDigits * 2 + 3 * i, 3);
		digit += account.substr(3 * numDigits * 3 + 3 * i, 3);		
		digits += stringToNumber(digit);	
	}
	
	return digits;	
};

exports.isValid = function(account) {
	return isValidAccountNumber(account);
};

exports.numbersHistory = function(accounts) {
	var numbers = accounts.split('\n');
	var output = '';
	
	for (var i=0; i<numbers.length; i++) {
		if (isIllAccountNumber(numbers[i])) {
			output += numbers[i] + ' ILL';
		}
		else if (isValidAccountNumber(numbers[i])) {
			output += numbers[i];		
		}
		else {
			output += numbers[i] + ' ERR';
		}
		
		if (i !== numbers.length - 1) {
			output += '\n';
		}
	}
		
	return output;
};


function isValidAccountNumber(account) {
	var sum = 0;	
	
	for (var i=0; i<account.length; i++) {
		sum += parseInt(account.charAt(i));	
	}	
	
	return sum % 11 === 0;
}

function isIllAccountNumber(account) {
	return account.indexOf('?') >= 0;
}

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
	else if (account == ' _ |_| _|   ') {
		return '9';	
	}
	
	return '?';	
}



