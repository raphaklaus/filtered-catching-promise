'use strict';

const Promise = require('bluebird'),
  UndefinedError = require('./Errors/UndefinedError.js'),
  LengthError = require('./Errors/LengthError.js');


class ErrorThrower {
  doWork() {
    return new Promise((resolve, reject) => {
      console.log('Working...');
      var result = Math.round(Math.random() * 2);
      if (result === 0)
        resolve();
      else if (result === 1)
        reject(new UndefinedError('OMG!'));
      else if (result === 2)
        reject(new LengthError('Wooooooow'));
    });
  }
}

var errorThrower = new ErrorThrower();

errorThrower.doWork()
  .catch(UndefinedError, error => {
    console.log('Sorry dude, you\'ve got an error! ' + error.message);
  })
  .catch(LengthError, error => {
    console.log('Sorry dude, you\'ve got an error! ' + error.message);
  }).finally(() => {
    console.log('Finished!')
  });
