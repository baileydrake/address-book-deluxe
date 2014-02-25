describe("Address", function() {
  describe("fullAddress", function() {
    it("returns the full address with nice formatting", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "123 4th Ave";
      testAddress.city = "98 Portland";
      testAddress.state = "Oregon 45";
      testAddress.fullAddress().should.equal("123 4th Ave, Portland, Oregon");
    });
  });
});  

describe("Phone", function() {
    describe("phoneNumber", function() {
    it("returns the phone number", function() {
      var testNumber = Object.create(Phone);
      testNumber.phone = "8438014873";
      testNumber.phoneNumber().should.equal("(843) 801-4873");
    });
    });

    describe("valid", function() {
      it("checks to determine whether a phone number is ten digits", function() {
        var testNumber = Object.create(Phone);
        testNumber.phone = "843801487345";
        testNumber.valid().should.equal(false);
      })
    });
});


