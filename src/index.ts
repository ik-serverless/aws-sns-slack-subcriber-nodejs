import Log from '@dazn/lambda-powertools-logger';
import { Handler } from 'aws-lambda';
import moment from 'moment';
import middy from 'middy';
import { NODE_ENV } from './config';

Log.debug('lambda executing...');

export const lambdahandler: Handler = async (event: any): Promise<any> => {
  Log.info(`Event: ${JSON.stringify(event)}.`);
  const hw: string = 'Hello Dummy Function';
  Log.info(`${hw}. Environment: ${NODE_ENV}`);

  return {
    statusCode: 200,
    body: JSON.stringify({
      time: moment.utc().toISOString(),
      records: event.Records.length,
    }),
  };
};

export const handler: Handler = middy(lambdahandler);
