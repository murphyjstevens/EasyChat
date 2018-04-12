const expect = require('expect');

var {generateMessage} = require('./../utils/message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Bob';
    var color = 2;
    var text = 'Howdy';
    var message = generateMessage(from, color, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message.color).toBe(color);
    expect(typeof(message.timestamp)).toBe('number');
  });
});
