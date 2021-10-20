import { Request, Response } from 'express';
import { NextFunction } from 'connect';
import { HttpMethod } from './http-method';

export interface IController {
  method: HttpMethod;
  routeName: string;

  authorisation(): (req: Request, res: Response, next: NextFunction)=> Promise<void>;
  requestAndSchemaValidation(): (req: Request, res: Response, next: NextFunction)=> void;
  businessValidation(): (req: Request, res: Response, next: NextFunction)=> Promise<void>;
  execution(): (req: Request, res: Response)=> Promise<void>;
}
