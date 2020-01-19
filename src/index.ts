import { Handler } from 'aws-lambda';
import moment from 'moment';
import middy from 'middy';
import Log from '@dazn/lambda-powertools-logger';

import { NODE_ENV } from './config';

Log.debug('lambda executing...');

export const handler: Handler = middy(
  async (event: any): Promise<any> => {
    Log.info(`Event: ${JSON.stringify(event)}.`);
    let hw: string = 'Hello Dummy Function';
    Log.info(`${hw}. Environment: ${NODE_ENV}`);
    Log.info(
      `event ${JSON.stringify(event)}`,
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        time: moment.utc().toISOString(),
      }),
    };
  },
);
