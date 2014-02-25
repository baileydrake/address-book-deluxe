var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var Address = {
  fullAddress: function() {
    return this.street + ", " + this.city + ", " + this.state;
  }
};

var Phone = {

  phoneNumber: function() {
    var phoneString = this.phone.replace(/ /g,"");
    var areaCode = phoneString.slice(0,3);
    var firstThree = phoneString.slice(3,6);
    var lastFour = phoneString.slice(6,10);

    return "(" + areaCode + ") " + firstThree + "-" + lastFour; 
  },

  valid: function() {
    var phoneString = this.phone.replace(/ /g,"")
    if(phoneString.length === 10){
      return true;
    } else {
      return false;
    } 
  }
};

$(document).ready(function () {
    $("#add-address").click(function () {
      $("#new-addresses").append('<div class="new-addresses">' +
                                  '<div class="form-group">' +
                                  '<label for="new-street">Street</label>' +
                                  '<input type="text" class="form-control new-street">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="new-city">City</label>' +
                                    '<input type="text" class="form-control new-city">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="new-state">State</label>' +
                                    '<input type="text" class="form-control new-state">' +
                                  '</div>' +
                                '</div>');
    });

    $("#add-phone").click(function() {
      $("#new-phone").append('<div class="new-phone">' +
                                '<div class="form-group">' +
                                  '<label for="new-phone">Phone</label>' +
                                  '<input type="text" class="form-control new-phone">' +
                                '</div>' +
                              '</div>');
    });

    $("form#new-contact").submit(function(event) {
      event.preventDefault();

      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();

      var newContact = Object.create(Contact);
      newContact.firstName = inputtedFirstName;
      newContact.lastName = inputtedLastName;

      newContact.addresses = [];
      newContact.phones = [];

      $(".new-address").each(function() {
        var inputtedStreet = $(this).find("input.new-street").val();
        var inputtedCity = $(this).find("input.new-city").val();
        var inputtedState = $(this).find("input.new-state").val();

        var newAddress = Object.create(Address);
        newAddress.street = inputtedStreet;
        newAddress.city = inputtedCity;
        newAddress.state = inputtedState;

        newContact.addresses.push(newAddress);
      });

      $(".new-phone").each(function() {
        var inputtedPhone = $("input.new-phone").val();

        var newPhone = Object.create(Phone);
        newPhone.phone = inputtedPhone;
        // var validPhone = newPhone.phone.valid();
        console.log(newPhone.valid());

       if(newPhone.valid() === false) {
          alert("wrong");
          return false;
        } else {
          newContact.phones.push(newPhone);
          $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
        };
      });


      $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".phones").text(newContact.phones.forEach(function(phone) {
        $("ul#phones").append("<li>" + phone.phoneNumber() + "</li>");
      }
        ));

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });

    this.reset();
  });
});
