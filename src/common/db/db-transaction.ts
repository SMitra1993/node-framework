import knex from 'knex';
import { IDbTransaction } from './db-interface';

export class DbTransaction implements IDbTransaction {
  trx: knex.Transaction;
  constructor(knexTransaction: knex.Transaction) {
    this.trx = knexTransaction;
  }

  async commit(): Promise<void> {
    await this.trx.commit();
  }

  async rollback(): Promise<void> {
    await this.trx.rollback();
  }

  query(
    queryString: string,
    params: knex.ValueDict
  ): Promise<any> {
    return this.trx.raw(queryString, params);
  }

  async multipleResultSet(
    queryString: string,
    params: knex.ValueDict
  ): Promise<any> {
    return this.trx.raw(queryString, params);
  }

  batchInsert(
    tableName: string,
    data: any[]
  ): Promise<any> {
    return this.trx.batchInsert(tableName, data);
  }
}
