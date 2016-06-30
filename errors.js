'use strict';

module.exports = class UndefinedError extends Error {
  constructor(name, message) {
    this.super(message);
    this.message = message;
    this.name = name;
  }
};
