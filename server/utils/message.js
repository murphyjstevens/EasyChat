const moment = require('moment');

var generateMessage = (from, color, text) => {
  return {
    from,
    color,
    text,
    timestamp: moment().valueOf()
  };
};

module.exports = {generateMessage};
