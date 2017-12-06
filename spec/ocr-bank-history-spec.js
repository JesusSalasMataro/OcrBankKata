var scanner = require("../ocr-bank");

describe("numbersHistory", function () {
  it("should write valid account numbers", function () {
    	expect(scanner.numbersHistory('111111122\n111111999')).toBe('111111122\n111111999');
  });
  
  it("should write error account numbers", function () {
    	expect(scanner.numbersHistory('111111122\n111111998')).toBe('111111122\n111111998 ERR');
  });
  
  it("should write ill account numbers", function () {
    	expect(scanner.numbersHistory('111111122\n11111199?')).toBe('111111122\n11111199? ILL');
  });
  
  it("should write ok, error and ill account numbers", function () {
    	expect(scanner.numbersHistory('1?1111122\n111111999\n123456789'))
    		.toBe('1?1111122 ILL\n111111999\n123456789 ERR');
  });
  
});
