const expect = require('expect');

const {Rooms} = require('./../utils/rooms');

describe('Rooms', () => {
  var rooms;

  beforeEach(() => {
    rooms = new Rooms();
    rooms.rooms = [{
      name: 'Free Parking'
    }, {
      name: 'SCIFI'
    }, {
      name: 'Easy'
    }];
  });

  it('should add new room', () => {
    var roomName = 'Easy';
    var roomCount = rooms.rooms.length;
    var room = rooms.addRoom(roomName);

    expect(room.name).toBe(roomName);
    expect(rooms.rooms.length).toBe(roomCount + 1);
  });

  it('should remove room', () => {
    var roomName = rooms.rooms[1].name;
    var roomCount = rooms.rooms.length;
    var room = rooms.removeRoom(roomName);

    expect(room.name).toBe(roomName);
    expect(rooms.rooms.length).toBe(roomCount - 1);
    expect(rooms.rooms.find((room) => room.name === roomName)).toBeUndefined();
  });

  it('should not remove non-existant room', () => {
    var roomName = 'JJjiojwejd';
    var roomCount = rooms.rooms.length;
    var room = rooms.removeRoom(roomName);

    expect(room).toBeUndefined();
    expect(rooms.rooms.length).toBe(roomCount);
  });

  it('should get room', () => {
    var roomName = rooms.rooms[2].name;
    var room = rooms.getRoom(roomName);

    expect(room.name).toBe(roomName);
  });

  it('should not get non-existant room', () => {
    var roomName = 'JJjiojwejd';
    var room = rooms.getRoom(roomName);

    expect(room).toBeUndefined();
  });

  it('should get all rooms', () => {
    var roomNames = rooms.rooms.map((room) => room.name);
    var resRoomNames = rooms.getRoomList();

    expect(resRoomNames).toEqual(roomNames);
  });
});
