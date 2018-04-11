const expect = require('expect');

const {Users} = require('./../utils/users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Murphy',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Megan',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Murphy',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove user', () => {
    var user = users.users[1];
    var usersCount = users.users.length;
    var resUser = users.removeUser(user.id);

    expect(user).toEqual(resUser);
    expect(users.users.length).toBe(usersCount - 1);
  });

  it('should not remove user', () => {
    var resUser = users.removeUser('12345');
    var usersCount = users.users.length;

    expect(resUser).toBeUndefined();
    expect(users.users.length).toBe(users.users.length);
  });

  it('should find user', () => {
    var user = users.users[1];
    var resUser = users.getUser(user.id);

    expect(resUser).toEqual(user);
  });

  it('should not find user', () => {
    var resUser = users.getUser('3231234');

    expect(resUser).toBeUndefined();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Murphy', 'Megan']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
});
