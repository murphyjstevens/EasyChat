const expect = require('expect');

const {isRealString} = require('./../utils/validation');

describe('isRealString', () => {
  it('should allow string with non-space characters', () => {
      var isString = isRealString('Bob');
      expect(isString).toBeTruthy();
  });

  it('should reject non-string values', () => {
      var isString = isRealString(true);
      expect(isString).toBeFalsy();
  });

  it('should reject string with only spaces', () => {
      var isString = isRealString('          ');
      expect(isString).toBeFalsy();
  });
});
