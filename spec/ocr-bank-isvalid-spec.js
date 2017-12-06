var scanner = require("../ocr-bank");

describe("isValid", function () {
  it("should have valid checksum", function () {
    	expect(scanner.isValid('111111122')).toBe(true);
  });
  
});
