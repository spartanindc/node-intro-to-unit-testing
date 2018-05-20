// import chai, declare expect variable
const expect = require('chai').expect;

// import Fizzbuzzer
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('Return "fizz" if multiple of 3', function() {
    const normalCases = [3, 6, 9, 12, 36];
    normalCases.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz');
    });
  });
  
  it('Return "buzz" if multiple of 5', function() {
    const normalCases = [5, 10, 15, 20, 50];
    normalCases.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('buzz');
    });
  });
  
  it('Return "fizz-buzz" if multiple of 15', function() {
    const normalCases = [15, 30, 45, 60, 150];
    normalCases.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz-buzz');
    });
  });
  
  it('Return inputted number if not a multiple of 3,5, or 15', function() {
    const normalCases = [1, 2, 4, 7, 101];
    normalCases.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal(input);
    });
  });
  
  it('should raise error if arg not a number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [true, false, [1,2,3], '1', 'oops'];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});