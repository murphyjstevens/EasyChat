class Rooms {
  constructor () {
    this.rooms = [];
  }
  addRoom (name) {
    var room = {name};
    this.rooms.push(room);
    return room;
  }
  removeRoom (name) {
    var room = this.getRoom(name);
    if (room) {
      this.rooms = this.rooms.filter((room) => room.name !== name);
    }
    return room;
  }
  getRoom (name) {
    return this.rooms.find((room) => room.name === name);
  }
  getRoomList() {
    var namesArray = this.rooms.map((room) => room.name);
    return namesArray;
  }
}

module.exports = {Rooms};
