// @ts-nocheck
import { lambdahandler } from '../src';
import mockedEnv, { RestoreFn } from 'mocked-env';

import * as event from './fixtures/sns.event.v1.json';

describe('index: ...', () => {
  let restore: RestoreFn;

  beforeEach(() => {
    restore = mockedEnv(
      {
        NODE_ENV: 'test',
        LOG_LEVEL: 'ERROR',
        REGION: 'non-exist-1',
      },
      { clear: true });
  });

  afterEach(() => {
    restore({ restore: true });
  });

  it('index: should return processed records', () => {
    let expected = 1;
    const result = lambdahandler(event);
    let body = JSON.parse(result['body']);
    expect(body.records).to.be.equal(expected);
  });
});
