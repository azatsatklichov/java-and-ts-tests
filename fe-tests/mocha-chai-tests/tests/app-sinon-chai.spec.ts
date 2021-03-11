
import { expect } from 'chai';
const sinon = require('sinon')

//const { app } = require('../src/app')

const app = () => console.log('Hello')


/**
 * Chai is an assertion library. So far, we have just 
 * used Assert to make assertions and we have an idea of what asserts do. 
 * Chai, does the exact same thing but allows for better readability.
 */
 describe("chai test", function() {
  it("checks equality", function() {
    expect(true).to.be.true;
  });
});


/**
 * SinonJS provides stand alone test spies, stubs and mocks.
 * This is the mechanism we'll be using to create our spies, stubs and mocks.
 */
 describe("sinon test", function() {
  it('logs Hello', () => {
    const log = sinon.spy(console, 'log')
    app()
    if (!log.calledOnceWith('Hello')) {
      throw new Error('Log was not called')
    }
  });
});


