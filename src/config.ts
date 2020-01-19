import * as env from 'env-var';

const NODE_ENV: string = env
  .get('NODE_ENV')
  .required()
  .asString();

const REGION: string = env
  .get('REGION')
  .required()
  .asString();

const DEBUG: string = env
  .get('DEBUG')
  .required()
  .asString();

export { NODE_ENV, REGION, DEBUG };
