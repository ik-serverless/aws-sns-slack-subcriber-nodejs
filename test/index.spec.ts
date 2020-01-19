// @ts-nocheck
import { expect } from 'chai';
import mockedEnv, { RestoreFn } from 'mocked-env';
import { lambdahandler } from '../src';
import * as event from './fixtures/sns.event.v1.json';
import * as sinon from 'sinon';

import * as publisher from '../src/publish';

describe('index: ...', () => {
  let restore: RestoreFn;
  let slack;

  beforeEach(() => {
    restore = mockedEnv(
      {
        NODE_ENV: 'test',
        LOG_LEVEL: 'ERROR',
        REGION: 'non-exist-1',
      },
      { clear: true });
    slack = sinon.stub(publisher, 'publish');
  });

  afterEach(() => {
    restore({ restore: true });
    slack.restore();
  });

  it('index: should return processed records', async () => {
    let expected = 1;
    const result = await lambdahandler(event);
    let body = JSON.parse(result.body);
    expect(body.records).to.be.equal(expected);
  });

  it('index: should publish single slack message', async () => {
    const result = await lambdahandler(event);
    expect(slack.calledOnce).is.eq(true);
  });

});
