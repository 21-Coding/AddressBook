// Business Logic for AddressBook (this is its Constructor)
function AddressBook() {
  this.contacts = []
}

// new method called add.contact
AddressBook.prototype.addContact = function(contact) {
  // locates the address books contacts array by calling 'this.contacts'
  this.contacts.push(contact);
  // It uses push() to add the Contact provided as an argument to the AddressBook's contacts array property.
}

// Business Logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }

  Contact.prototype.fullName = function() {
      return this.firstName + " " + this.lastName;
    }
