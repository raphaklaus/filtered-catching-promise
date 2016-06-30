'use strict';

var UndefinedError = require('./errors.js');

class ErrorThrower {
  doWork() {
    return new Promise((resolve, reject) => {
      console.log('work!');
      resolve();
    });
  }

  doSomeWork() {
    return new Promise((resolve, reject) => {
      console.log('getting error...');
      reject(new UndefinedError());
    });
  }
}

var errorThrower = new ErrorThrower();

errorThrower.doWork()
  .then(() => errorThrower.doWork())
  .then(() => errorThrower.doWork())
  .then(() => errorThrower.doSomeWork())
  .catch(UndefinedError, error => {
    console.log(error);
  });
