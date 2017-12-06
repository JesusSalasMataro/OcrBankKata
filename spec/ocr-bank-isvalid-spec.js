var scanner = require("../ocr-bank");

describe("isValid", function () {
  it("should have valid checksum", function () {
    	expect(scanner.isValid('111111122')).toBe(true);
  });
  
  it("should not have valid checksum", function () {
    	expect(scanner.isValid('111111123')).toBe(false);
  });
  
  it("should not have valid checksum when invalid number", function () {
    	expect(scanner.isValid('111111?24')).toBe(false);
  });
});
