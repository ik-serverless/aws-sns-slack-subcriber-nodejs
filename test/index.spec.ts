// @ts-nocheck
import * as sinon from 'sinon';
import { processor } from '../src';
import { expect } from 'chai';
// import { SNSEventRecord, SNSMessage } from 'aws-lambda';
import { Context, Callback } from 'aws-lambda';

describe('index', () => {
  let dummyEvent = {
    headers: {},
    body: null,
    resource: '',
  };

  let ctx: Context = {

  };

  let cl: Callback<any> = {

  };

  /**
   * Prepare a sandbox to run the tests in.
   */
  beforeEach(() => {
    // this.sandbox = sinon.sandbox.create();
  });

  /**
   * Remove the sandbox
   */
  afterEach(() => {
    // this.sandbox.restore();
    // AWS.restore();
  });

  it('index: Test the available exports', () => {
    let test = processor(dummyEvent);
    // expect(test.hasRecords()).to.be.equal(false);
  });
});
