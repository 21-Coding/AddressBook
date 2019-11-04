// Business Logic for AddressBook (this is its Constructor)
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

// new method called add.contact
AddressBook.prototype.addContact = function(contact) {
  // locates the address books contacts array by calling 'this.contacts'
  contact.id = this.assignId();
  // This creates an id property on a Contact object, and assigns it a unique ID, incrementing value before pushing it to the contacts array in AddressBook.
  this.contacts.push(contact);
  // It uses push() to add the Contact provided as an argument to the AddressBook's contacts array property.
}
AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
// This new method will increment the this.currentId property on the AddressBook object by 1 and return the updated value. This mimics a database by creating sequentially incrementing ID values which are never repeated (making them unique).
AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
       }
      }
    };
  return false;
}
// The method then loops through the AddressBook object's contacts array, checking each entry's id against the id provided to the findContact() method as an argument.When a match is found, the method returns the Contact object with that specific id.
AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
   if (this.contacts[i]) {
    if (this.contacts[i].id == id) {
      delete this.contacts[i];
      return true;
      }
    }
  };
  return false;
}
// It deletes the contact with a matching ID and then returns true because the operation was completed. (If there's no record with a matching id to delete, it returns false.)

// Business Logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }

  Contact.prototype.fullName = function() {
      return this.firstName + " " + this.lastName;
    }


// User Interface Logic

var addressBook = new AddressBook();
// his is a global variable because it's declared at the 'top level' of our file.



    function displayContactDetails(addressBookToDisplay) {
      var contactsList = $("ul#contacts");
      var htmlForContactInfo = "";
      addressBookToDisplay.contacts.forEach(function(contact) {
        htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
      });
      contactsList.html(htmlForContactInfo);
    };
$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
  })
})
