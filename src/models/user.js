export default class User {
  id = '';
  firstName = '';
  lastName = '';
  email = '';
  description = '';
  picture = '';

  static fromJson(json) {
    var user = new User();

    user.id = json.id;
    user.firstName = json.first_name;
    user.lastName = json.last_name;
    user.email = json.email;
    user.description = json.description;
    user.picture = json.picture;

    return user;
  }

  toJson() {
    var json = {};

    json.id = this.id;
    json.first_name = this.firstName;
    json.last_name = this.lastName;
    json.email = this.email;
    json.description = this.description;
    json.picture = this.picture;

    return json;
  }
}