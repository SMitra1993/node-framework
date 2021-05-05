import knex from 'knex';
import config from 'config';
import { injectable } from 'inversify';
import { IDbManager, IDbQueryable, IDbSession, IDbTransaction, ISessionConfig } from './db-interface';
import { DbSession } from './db-session';

@injectable()
export class DbManager implements IDbManager {
  sessions: { [name: string]: IDbSession } = {};

  constructor() {
    const sessionsConfig = config.get('dataAccess.sessions') as ISessionConfig[];

    // expecting sessionConfig to be
    // {
    //   name: 'mydbconn',
    //   type: 'mssql',
    //   connection: {
    //     host: '127.0.0.1',
    //     user: 'your_database_user',
    //     password: 'your_database_password',
    //     database: 'your_database'
    //   }
    // }
    for (const sessionConfig of sessionsConfig) {
      this.sessions[sessionConfig.name] = new DbSession(sessionConfig);
    }
  }

  executeQuery(
    queryable: IDbQueryable,
    query: string,
    params?: knex.ValueDict
  ): Promise<any> {
    return queryable.query(query, params);
  }

  async executeQueryFromNamespace(
    queryable: IDbQueryable,
    queryNamespace: string,
    queryName: string,
    params?: knex.ValueDict
  ): Promise<any> {
    // to do
    return {};
  }

  getDbSession(sessionName: string): IDbSession {
    return this.sessions[sessionName];
  }

  startTransaction(dbSession: IDbSession): Promise<IDbTransaction> {
    return dbSession.transaction();
  }

  async commitTransaction(trx: IDbTransaction): Promise<void> {
    await trx.commit();
  }

  async rollbackTransaction(trx: IDbTransaction): Promise<void> {
    await trx.rollback();
  }
}
