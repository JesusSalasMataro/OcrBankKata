exports.parse = function (account) {
	if (account.length === 12) {
		return stringToNumber(account);		
	}
	else {
		var firstDigit;
		var secondDigit;
		
		firstDigit = account.substr(0, 3) + account.substr(6, 3) + account.substr(12, 3) + account.substr(18, 3);
		secondDigit = account.substr(3, 3) + account.substr(9, 3) + account.substr(15, 3) + account.substr(21, 3);
		
		return stringToNumber(firstDigit) + stringToNumber(secondDigit);
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



