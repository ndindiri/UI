class Users {
  constructor(userId, name, email) {
    this.setUserId(userId);
    this.setName(name);
    this.setEmail(email);
  }
  setUserId(userId) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
   setEmail(email) {
    return this.email;
  }
  getEmail() {
    return this.email;
  }
}

export default Users;