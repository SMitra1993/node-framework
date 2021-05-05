import expressHttpContext from 'express-http-context';
import { getLogger } from 'log4js';
import { IError } from '../common/interfaces/ierror';

export function responseWrapper(message: string, data: any, code?: string) {
  const transactionId = require('express-http-context').get('transactionId');
  const payload = {
    transactionId,
    message,
    code,
    data
  };
  const logInfo = {
    transactionId,
    message,
    code
  };
  const logger = getLogger();
  logger.info(`RESPONSE PAYLOAD:\n${JSON.stringify(logInfo)}`);
  return payload;
}

export function errorWrapper(errors: IError[]) {
  const transactionId = expressHttpContext.get('transactionId');
  const payload = {
    transactionId,
    data: {},
    errors: errors.map(composeErrorBody)
  };
  const logger = getLogger();
  logger.info(`RESPONSE PAYLOAD:\n${JSON.stringify(payload)}`);
  return payload;
}

function composeErrorBody(error: IError) {
  return {
    code:
      error.statusCode ||
      error.code,
    title: error.name,
    details:
      error.message ||
      JSON.parse(error.body).message ||
      '',
    source: error.source
  };
}
