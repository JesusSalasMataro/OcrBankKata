var scanner = require("../ocr-bank");

describe("parse", function () {
  it("should parse number zero", function () {
  		// ' _ '
  		// '| |'
  		// '|_|'
  		// '   '
    	
    	expect(scanner.parse(' _ | ||_|   ')).toBe('0');
  });
  
  it("should parse number one", function () {
  		// '   '
  		// '  |'
  		// '  |'
  		// '   '
    	
    	expect(scanner.parse('     |  |   ')).toBe('1');
  });
  
  it("should parse number two", function () {
  		// ' _ '
  		// ' _|'
  		// '|_ '
  		// '   '
    	
    	expect(scanner.parse(' _  _||_    ')).toBe('2');
  });
  
  it("should parse number two", function () {
  		// ' _ '
  		// ' _|'
  		// ' _|'
  		// '   '
    	
    	expect(scanner.parse(' _  _| _|   ')).toBe('3');
  });
  
  it("should parse number two", function () {
  		// '   '
  		// '|_|'
  		// '  |'
  		// '   '
    	
    	expect(scanner.parse('   |_|  |   ')).toBe('4');
  });
  
  it("should parse number two", function () {
  		// ' _ '
  		// '|_ '
  		// ' _|'
  		// '   '
    	
    	expect(scanner.parse(' _ |_  _|   ')).toBe('5');
  });
  
  it("should parse number two", function () {
  		// ' _ '
  		// '|_ '
  		// '|_|'
  		// '   '
    	
    	expect(scanner.parse(' _ |_ |_|   ')).toBe('6');
  });
  
  it("should parse number two", function () {
  		// ' _ '
  		// '  |'
  		// '  |'
  		// '   '
    	
    	expect(scanner.parse(' _   |  |   ')).toBe('7');
  });
  
  it("should parse number two", function () {
  		// ' _ '
  		// '|_|'
  		// '|_|'
  		// '   '
    	
    	expect(scanner.parse(' _ |_||_|   ')).toBe('8');
  });
  
  it("should parse number two", function () {
  		// ' _ '
  		// '|_|'
  		// ' _|'
  		// '   '
    	
    	expect(scanner.parse(' _ |_| _|   ')).toBe('9');
  });
  
  it("should parse number twelve", function () {
  		// '    _ '
  		// '  | _|'
  		// '  ||_ '
  		// '      '
    	
    	expect(scanner.parse('    _   | _|  ||_       ')).toBe('12');
  });
  
  it("should parse number zero one", function () {
  		// ' _    '
  		// '| |  |'
  		// '|_|  |'
  		// '      '
    	
    	expect(scanner.parse(' _    | |  ||_|  |      ')).toBe('01');
  });
  
});
