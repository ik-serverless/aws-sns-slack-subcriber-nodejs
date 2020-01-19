import Log from '@dazn/lambda-powertools-logger';
import { Handler, SNSEvent } from 'aws-lambda';
import middy from 'middy';
import moment from 'moment';

import { EventProcessor, LambdaResponse } from './models';
import { publish } from './publish';

Log.debug('lambda executing...');

export const lambdahandler: Handler = async (event: SNSEvent): Promise<LambdaResponse> => {
  Log.info(`Event: ${ JSON.stringify(event) }.`);

  const process = new EventProcessor(event);

  for (const entry of process.getMessages()) {
    await publish(entry);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      time: moment.utc().toISOString(),
      records: process.recordCount,
    }),
  };
};

export const handler: Handler = middy(lambdahandler);
