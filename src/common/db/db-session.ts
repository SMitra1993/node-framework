import knex from 'knex';
import { IDbSession, IDbTransaction, ISessionConfig } from './db-interface';
import { DbTransaction } from './db-transaction';
import * as db from 'mssql';

export class DbSession implements IDbSession {
  knex: knex;
  constructor(sessionConfig: ISessionConfig) {
    this.knex = knex({
      client: sessionConfig.type,
      connection: sessionConfig.connection
    });
  }

  async transaction(): Promise<IDbTransaction> {
    const trx = await this.knex.transaction();
    return new DbTransaction(trx);
  }

  query(queryString: string, params: knex.ValueDict): Promise<any> {
    return this.knex.raw(queryString, params);
  }

  async multipleResultSet(
    queryString: string,
    params: knex.ValueDict
  ): Promise<any> {

    const connection = await this.knex.client.acquireRawConnection();
    let results: any;
    const objKeys = Object.keys(params);
    const request = new db.Request(connection);
    if (objKeys && objKeys.length > 0) {
      const objValue = Object.values(params);
      objKeys.forEach((el, i) => {
        request.input(el, objValue[i]);
      });
      results = await request.execute(queryString);
    } else {
      results = await request.query(queryString);
    }
    return results.recordsets;
  }

}
