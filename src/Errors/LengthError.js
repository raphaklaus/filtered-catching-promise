'use strict';

module.exports = class LengthError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'LengthError';
  }
};
