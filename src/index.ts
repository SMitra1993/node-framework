import expressHttpContext from 'express-http-context';
import uuid from 'uuid';
import os, { userInfo } from 'os';
import express from 'express';
import compression from 'compression';
import { configure, getLogger } from 'log4js';
import config from 'config';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { router } from './routes';
import { JsonSchemaValidation } from 'express-jsonschema';
import { errorWrapper } from './utils/response-wrapper';
import cors from 'cors';

const logger = getLogger();
const logName = config.get('logs.logName');
const logFileDirectory = config.get('logs.logDirectory');
const logLevel = config.get('logs.logLevel') as string;

configure({
  appenders: { default: { type: 'dateFile', filename: `${logFileDirectory}\\${logName}.${os.hostname()}.log`, pattern: 'yyyyMMdd', keepFileExt: true, alwaysIncludePattern: true } },
  categories: { default: { appenders: ['default'], level: logLevel == null ? 'info' : logLevel } }
});

const servicePort = config.get('service.port');

const app = express();

// Using compression
app.use(compression());
// Best to use Helmet first
app.use(helmet());
// Accept and parse request body to JSON
// app.use(bodyParser.json());
// Include custom routes
app.use(bodyParser.json({ limit: '50mb' }));
app.use(expressHttpContext.middleware);
app.use((req, res, next) => {
  const transactionId = uuid().toString();
  expressHttpContext.set('transactionId', transactionId);
  logger.info({
    ip: req.ip,
    method: req.method,
    baseUrl: req.baseUrl,
    originalUrl: req.originalUrl,
    params: req.params,
    path: req.path,
    query: req.query,
    body: req.body
  });
  next();
});

app.use(cors());
app.use('/api/v1', router);

app.use((err: JsonSchemaValidation, req: any, res: any, next: any) => {
  let responseData;

  if (err.name === 'JsonSchemaValidation') {

    // Set a bad request http response status or whatever you want
    const statusCode = 400;
    res.status(statusCode);
    const errors = err.validations.body.map((x) => {
      return {
        statusCode: 400,
        name: err.name,
        message: x
      };
    });

    // Format the response body however you want
    responseData = errorWrapper(errors);

    // Take into account the content type if your app serves various content types
    res.json(responseData);
  } else {
    // pass error to next error middleware handler
    next(err);
  }
});

app.use((error: any, req: any, res: any, next: any) => {
  res.status(500);
  res.json(error);
});

// Start service
app.listen(servicePort, () => {
  logger.info(`Service started at http://localhost:${servicePort}`);
  // let batch = new BatchTableHandler()
  // batch.timerCallback();
});
