import { inject, injectable } from 'inversify';
import { IDbManager } from '../common/config/idb-manager';
import { IOCTYPES } from '../common/ioc-types';
import { IMyProfileController } from '../common/interfaces/controllers/imy-profile-controller';
import { HttpMethod } from '../common/interfaces/http-method';
import { validate } from 'express-jsonschema';
import { responseWrapper, errorWrapper } from '../utils/response-wrapper';
import { NextFunction } from 'connect';
import { Request, Response } from 'express';
import { getLogger } from 'log4js';
import { myProfileSchema } from '../validators/my-profile';
import { JSONSchema4 } from 'json-schema';
import { IMyProfileDataLayer } from '../common/interfaces/data-layers/imy-profile-data-layer';
import * as jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

@injectable()
export class MyProfileController implements IMyProfileController {
  constructor(
    @inject(IOCTYPES.dbManager) private _dbManager: IDbManager,
    @inject(IOCTYPES.myProfileDataLayer)
    private _myProfileDataLayer: IMyProfileDataLayer
  ) {}

  private logger = getLogger();

  routeName = '/my-profile-details/:userId';
  method: HttpMethod = HttpMethod.Get;

  authorisation(): (
    req: Request,
    res: Response,
    next: NextFunction
  )=> Promise<void> {
    return async (
      req: Request,
      res: Response,
      next: NextFunction
    ): Promise<void> => {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[0];
      if (token == undefined) res.sendStatus(401);
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
          res.status(401).json(
            errorWrapper([
              {
                statusCode: 500,
                name: 'Unexpected error',
                message: `UnexpectedError: [${err}]`,
              },
            ])
          );
        } else {
          req.body.user = user;
          next();
        }
      });
    };
  }

  requestAndSchemaValidation(): (
    req: Request,
    res: Response,
    next: NextFunction
  )=> void {
    return validate({ params: myProfileSchema as JSONSchema4 });
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
        await this._dbManager.createDbClient();
        const responseMessage = 'Data retrieved successfully';
        const results = await this._myProfileDataLayer.getMyProfileDetails(
          req.params.userId
        );
        res.status(200).json(responseWrapper(responseMessage, results));
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
