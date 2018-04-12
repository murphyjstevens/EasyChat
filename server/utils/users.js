class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, color, room) {
    var user = {id, name, color, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    var user = this.getUser(id);
    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
  }
  getUser (id) {
    return this.users.find((user) => user.id === id);
  }
  getUserList(room) {
    var users = this.users.filter((user) => user.room === room);
    // var namesArray = users.map((user) => user.name);

    return users;
  }
}

module.exports = {Users};
