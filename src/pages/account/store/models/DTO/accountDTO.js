export class AccountDTO {

  constructor(userID, firstname, familyName, address, city, state, zip, country, email, password, newPassword) {
    this.userID = userID;
    this.firstname = firstname;
    this.familyName = familyName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.country = country;
    this.email = email;
    this.password = password;
    this.newPassword = newPassword;
  }
}
