'use strict';

module.exports = class UndefinedError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'UndefinedError';
  }
};
