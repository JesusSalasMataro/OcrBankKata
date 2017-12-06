var scanner = require("../ocr-bank");

describe("parse", function () {
  it("should parse number zero", function () {
  		var row1 = ' _ '
  		var row2 = '| |'
  		var row3 = '|_|'
  		var row4 = '   '
    	
    	expect(scanner.parse(row1 + row2 + row3 + row4)).toBe('0');
  });
  
  it("should parse number one", function () {
  		var row1 = '   '
  		var row2 = '  |'
  		var row3 = '  |'
  		var row4 = '   '
    	
    	expect(scanner.parse(row1 + row2 + row3 + row4)).toBe('1');
  });
  
  it("should parse number two", function () {
  		var row1 = ' _ '
  		var row2 = ' _|'
  		var row3 = '|_ '
  		var row4 = '   '
    	
    	expect(scanner.parse(row1 + row2 + row3 + row4)).toBe('2');
  });
  
  it("should parse number two", function () {
  		var row1 = ' _ '
  		var row2 = ' _|'
  		var row3 = ' _|'
  		var row4 = '   '
    	
    	expect(scanner.parse(row1 + row2 + row3 + row4)).toBe('3');
  });
  
  it("should parse number two", function () {
  		var row1 = '   '
  		var row2 = '|_|'
  		var row3 = '  |'
  		var row4 = '   '
    	
    	expect(scanner.parse(row1 + row2 + row3 + row4)).toBe('4');
  });
  
  it("should parse number two", function () {
  		var row1 = ' _ '
  		var row2 = '|_ '
  		var row3 = ' _|'
  		var row4 = '   '
    	
    	expect(scanner.parse(row1 + row2 + row3 + row4)).toBe('5');
  });
  
  it("should parse number two", function () {
  		var row1 = ' _ '
  		var row2 = '|_ '
  		var row3 = '|_|'
  		var row4 = '   '
    	
    	expect(scanner.parse(row1 + row2 + row3 + row4)).toBe('6');
  });
  
  it("should parse number two", function () {
  		var row1 = ' _ '
  		var row2 = '  |'
  		var row3 = '  |'
  		var row4 = '   '
    	
    	expect(scanner.parse(row1 + row2 + row3 + row4)).toBe('7');
  });
  
  it("should parse number two", function () {
  		var row1 = ' _ '
  		var row2 = '|_|'
  		var row3 = '|_|'
  		var row4 = '   '
    	
    	expect(scanner.parse(row1 + row2 + row3 + row4)).toBe('8');
  });
  
  it("should parse number two", function () {
  		var row1 = ' _ '
  		var row2 = '|_|'
  		var row3 = ' _|'
  		var row4 = '   '
    	
    	expect(scanner.parse(row1 + row2 + row3 + row4)).toBe('9');
  });
  
  it("should parse number twelve", function () {
  		var row1 = '    _ '
  		var row2 = '  | _|'
  		var row3 = '  ||_ '
  		var row4 = '      '
    	
    	expect(scanner.parse(row1 + row2 + row3 + row4)).toBe('12');
  });
  
  it("should parse number zero one", function () {
  		var row1 = ' _    '
  		var row2 = '| |  |'
  		var row3 = '|_|  |'
  		var row4 = '      '
    	
    	expect(scanner.parse(row1 + row2 + row3 + row4)).toBe('01');
  });
  
  it("should parse number two seven nine", function () {
  		var row1 = ' _  _  _ '
  		var row2 = ' _|  ||_|'
  		var row3 = '|_   | _|'
  		var row4 = '         '
    	
    	expect(scanner.parse(row1 + row2 + row3 + row4)).toBe('279');
  });
  
  it("should parse number four one eight", function () {
  		var row1 = '       _ '
  		var row2 = '|_|  ||_|'
  		var row3 = '  |  ||_|'
  		var row4 = '         '
    	
    	expect(scanner.parse(row1 + row2 + row3 + row4)).toBe('418');
  });
  
});
