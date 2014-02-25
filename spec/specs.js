describe('Contact', function() {
  describe('fullName', function() {
    it("returns the first and last names concatenated with a space and the address", function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Dolly";
      testContact.lastName = "Parton";
      testContact.address = "LA"
      testContact.fullName().should.equal("Dolly Parton");
    });
  });
});
