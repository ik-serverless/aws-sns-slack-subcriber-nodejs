import * as env from 'env-var';

const NODE_ENV: string = env
  .get('NODE_ENV')
  .required()
  .asString();

const REGION: string = env
  .get('REGION')
  .required()
  .asString();

const LOG_LEVEL: string = env
  .get('LOG_LEVEL')
  .required()
  .asString();

export { NODE_ENV, REGION, LOG_LEVEL };
