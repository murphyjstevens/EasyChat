const expect = require('expect');

var {generateMessage} = require('./../utils/message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Bob';
    var text = 'Howdy';
    var message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof(message.timestamp)).toBe('number');
  });
});
