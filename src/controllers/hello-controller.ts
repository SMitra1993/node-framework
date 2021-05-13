import { NextFunction } from 'connect';
import { Request, Response } from 'express';
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
import { getLogger } from 'log4js';
import { IDbManager } from '../common/config/idb-manager';

@injectable()
export class HelloController implements IHelloController {
  constructor(
    @inject(IOCTYPES.dbManager) private dbManager: IDbManager,
    @inject(IOCTYPES.helloDataLayer) private helloDataLayer: IHelloDataLayer
  ) {}

  private logger = getLogger();

  // authoriseOptions: AuthoriseOptions = {
  //   entity: 'MMS_SRA',
  //   accessOperation: AccessOperation.Any,
  //   authorisationMode: AuthorisationMode.InternalOnly,
  //   sessionApiUrl: config.get('sessionCache.url') as string
  // };

  routeName = '/hello';
  method: HttpMethod = HttpMethod.Get;

  // authorisation(): (req: Request, res: Response, next: NextFunction) => Promise<void> {
  //   return authorise(this.authoriseOptions);
  // }

  requestAndSchemaValidation(): (
    req: Request,
    res: Response,
    next: NextFunction
  )=> void {
    return validate({ body: helloSchema as JSONSchema4 }, [
      helloChildSchema as JSONSchema4,
    ]);
  }

  businessValidation(): (
    req: Request,
    res: Response,
    next: NextFunction
  )=> Promise<void> {
    return async (
      req: Request,
      res: Response,
      next: NextFunction
    ): Promise<void> => {
      next();
    };
  }

  execution(): (req: Request, res: Response)=> Promise<void> {
    return async (req: Request, res: Response): Promise<void> => {
      try {
        let movie = undefined;
        const client = await this.dbManager.createDbClient().connect();
        const responseMessage = 'Data retrieved successfully';
        const collection = client.db('transaction').collection('billingDetails');
        const query = { gstinNumber: '21AAAAAA0000A1Z5' };
        // movie = await collection.findOne(query);
        movie = await collection.findOne(query);
        res.status(200).json(
          responseWrapper(responseMessage, movie)
        );
      } catch (err) {
        this.logger.info('Error: ' + `${JSON.stringify(err)}`);
        // await trxOracle.rollback();
        this.logger.info('After Oracle transaction rollback');
        res.status(500).json(
          errorWrapper([
            {
              statusCode: 500,
              name: 'Unexpected error',
              message: `UnexpectedError: [${err}]`,
            },
          ])
        );
      }
    };
  }
}
