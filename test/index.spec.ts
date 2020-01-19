import * as sinon from 'sinon';
import { handler } from '../src';
import { expect } from 'chai';

describe('index', () => {
  /**
   * Prepare a sandbox to run the tests in.
   */
  beforeEach(() => {
    this.sandbox = sinon.sandbox.create();
  });

  /**
   * Remove the sandbox
   */
  afterEach(() => {
    this.sandbox.restore();
    // AWS.restore();
  });

  it('index: Test the available exports', () => {
    let test = handler({});
    expect(test.hasRecords()).to.be.equal(false);
  });
});
