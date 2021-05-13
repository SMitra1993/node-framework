import { IHello } from './ihello';
import { IDbTransaction, IDbQueryable } from '../db/db-interface';
import { MongoClient } from 'mongodb';

export interface IHelloDataLayer {
  getBillingDetails(client: MongoClient): Promise<any>;

  save(trx: IDbTransaction, hello: IHello): Promise<number>;

  getHello(queryable: IDbQueryable, name: string): Promise<IHello>;

  filterHello(queryable: IDbQueryable, search: string): Promise<IHello[]>;

  executeOracle(queryable: IDbQueryable, id: string): Promise<string[]>;

  executeSQLSP(queryable: IDbQueryable): Promise<any[]>;
}
