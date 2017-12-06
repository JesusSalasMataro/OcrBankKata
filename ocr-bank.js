exports.parse = function (account) {
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
};



