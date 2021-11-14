import { inject, injectable } from 'inversify';
import { IDbManager } from '../common/config/idb-manager';
import { IOCTYPES } from '../common/ioc-types';
import { HttpMethod } from '../common/interfaces/http-method';
import { validate } from 'express-jsonschema';
import { responseWrapper, errorWrapper } from '../utils/response-wrapper';
import { NextFunction } from 'connect';
import { Request, Response } from 'express';
import { getLogger } from 'log4js';
import { JSONSchema4 } from 'json-schema';
import { ILoginController } from '../common/interfaces/controllers/ilogin-controller';
import { ILoginDataLayer } from '../common/interfaces/data-layers/ilogin-data-layer';
import { loginSchema } from '../validators/login';
import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

@injectable()
export class LoginController implements ILoginController {
  constructor(
    @inject(IOCTYPES.dbManager) private _dbManager: IDbManager,
    @inject(IOCTYPES.loginDataLayer) private _loginDataLayer: ILoginDataLayer
  ) {}

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
      next();
    };
  }

  private logger = getLogger();

  routeName = '/login';
  method: HttpMethod = HttpMethod.Post;

  requestAndSchemaValidation(): (
    req: Request,
    res: Response,
    next: NextFunction
  )=> void {
    return validate({ body: loginSchema as JSONSchema4 });
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
        dotenv.config({ path: process.env.ACCESS_TOKEN_SECRET });
        let responseMessage = '';
        let isValid = false;
        const results = await this._loginDataLayer.verifyUserDetail(
          req.body.userId
        );
        if (results) {
          isValid = await bcrypt.compare(
            results.password,
            req.header('password')
          );
        }

        let accessToken = '';
        let userDetails = {};
        if (isValid) {
          responseMessage = 'Token retrieved successfully';
          accessToken = jwt.sign(
            { name: req.body.userId },
            process.env.ACCESS_TOKEN_SECRET
          );
          userDetails = {
            token: accessToken,
            userId: results.emailId,
          };
          res.status(200).json(responseWrapper(responseMessage, userDetails));
        } else {
          userDetails = {
            token: accessToken,
            userId: results?.emailId,
          };
          responseMessage = 'Unauthorized user';
          res.status(401).json(responseWrapper(responseMessage, userDetails));
        }
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
