import { CONSTANTS } from '../common/constants';
import { NextFunction } from 'connect';
import { Request, Response } from 'express';
import { IHello } from '../common/interfaces/ihello';
import { IHelloController } from '../common/interfaces/ihello-controller';
import { HttpMethod } from '../common/interfaces/http-method';
// import { authorise, AccessOperation, AuthorisationMode, AuthoriseOptions } from 'wc-node-authorisation';
import { validate } from 'express-jsonschema';
import { JSONSchema4 } from 'json-schema';
import { helloSchema, helloChildSchema } from '../validators/hello';
import { IHelloDataLayer } from '../common/interfaces/ihello-data-layer';
import { responseWrapper, errorWrapper } from '../utils/response-wrapper';
import { injectable, inject } from 'inversify';
import { IOCTYPES } from '../common/ioc-types';
import { IDbManager } from '../common/db/db-interface';
import config from 'config';
import { getLogger } from 'log4js';

@injectable()
export class HelloController implements IHelloController {
  @inject(IOCTYPES.DbManager) private dbManager: IDbManager;
  @inject(IOCTYPES.HelloDataLayer) private helloDataLayer: IHelloDataLayer;

  private logger = getLogger();

  // authoriseOptions: AuthoriseOptions = {
  //   entity: 'MMS_SRA',
  //   accessOperation: AccessOperation.Any,
  //   authorisationMode: AuthorisationMode.InternalOnly,
  //   sessionApiUrl: config.get('sessionCache.url') as string
  // };

  routeName = '/hello';
  method: HttpMethod = HttpMethod.Post;

  // authorisation(): (req: Request, res: Response, next: NextFunction) => Promise<void> {
  //   return authorise(this.authoriseOptions);
  // }

  requestAndSchemaValidation(): (req: Request, res: Response, next: NextFunction)=> void {
    return validate({ body: helloSchema as JSONSchema4 }, [
      helloChildSchema as JSONSchema4
    ]);
  }

  businessValidation(): (req: Request, res: Response, next: NextFunction)=> Promise<void> {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      // const world = req.body.world;
      // const children = req.body.children;
      // const errors: IError[] = [];

      // const dbSession = this.dbManager.getDbSession(CONSTANTS.myDbSessionName);
      // const hello = await this.helloDataLayer.getHello(dbSession, req.body.name);
      // if (hello) {
      //   errors.push({
      //     statusCode: 422,
      //     name: 'Hello Already exists',
      //     message: `Hello [${req.body.name}] already exists.`
      //   });
      // }
      // // preferably use enum type for earth instead of string here
      // if (children.length > 1 && world !== 'Earth') {
      //   errors.push({
      //     statusCode: 422,
      //     name: 'Non Earth children',
      //     message: `You can at most have 1 child if you are not from Earth.
      // You have [${children.length}] children and are from [${world}].`
      //   });
      // }

      // if (errors.length > 0) {
      //   res.status(422).json(errorWrapper(errors));
      // } else {
      next();
      // }
    };
  }

  execution(): (req: Request, res: Response)=> Promise<void> {
    return async (req: Request, res: Response): Promise<void> => {
      const responseMessage = 'Your hello request has been accepted and saved.';
      const hello = req.body as IHello;
      // do something like store to database
      this.logger.info('Before SQL db');
      const dbSession = this.dbManager.getDbSession(CONSTANTS.myDbSessionName);
      this.logger.info('After SQL db');
      this.logger.info('Before Oracle db');
      const dbSessionoracle = this.dbManager.getDbSession(CONSTANTS.oracleDbSessionName);
      this.logger.info('After Oracle db');
      const trxOracle = await dbSessionoracle.transaction();
      try {
        this.logger.info('Before executeSQLSP');
        const results = await this.helloDataLayer.executeSQLSP(dbSession);
        this.logger.info('After executeSQLSP');
        this.logger.info('Before executeOracle');
        const resultsOracle = await this.helloDataLayer.executeOracle(trxOracle, req.body.id);
        this.logger.info('After executeOracle');
        await trxOracle.commit();
        this.logger.info('After Oracle transaction commit');
        res.status(200).json(responseWrapper(JSON.stringify({ message: responseMessage,
                                                              sqlResponse: results,
                                                              oracleResponse: resultsOracle[0] }), req.body));
      } catch (err) {
        this.logger.info('Error: ' + `${JSON.stringify(err)}`);
        await trxOracle.rollback();
        this.logger.info('After Oracle transaction rollback');
        res.status(500).json(errorWrapper([{ statusCode: 500, name: 'Unexpected error', message: `UnexpectedError: [${err}]` }]));
      }
    };
  }
}
