// @ts-check

import retry from '../retry';

describe('#retry', () => {
  it('should finish with error', () => (
    new Promise((done) => {
      let calledTimes = 0;
      retry(3, (callback) => {
        calledTimes += 1;
        callback(calledTimes);
      }, (err) => {
        expect(err).toBe(3);
        expect(calledTimes).toBe(3);
        done();
      });
    })
  ));

  it('should finish without error', () => (
    new Promise((done) => {
      let calledTimes = 0;
      retry(3, (callback) => {
        calledTimes += 1;
        if (calledTimes < 3) {
          callback(calledTimes);
        } else {
          callback(null, calledTimes);
        }
      }, (err, result) => {
        expect(err).toBeNull();
        expect(calledTimes).toBe(3);
        expect(result).toBe(3);
        done();
      });
    })
  ));

  it('should call final callback if err is empty', () => (
    new Promise((done) => {
      let calledTimes = 0;
      retry(6, (callback) => {
        calledTimes += 1;
        if (calledTimes === 4) {
          callback(null, calledTimes);
          return;
        }
        callback(calledTimes);
      }, (err, result) => {
        expect(result).toBe(4);
        expect(calledTimes).toBe(4);
        done();
      });
    })
  ));
});
