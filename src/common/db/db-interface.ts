import knex from 'knex';

export interface IDbManager {
  executeQuery(
    queryable: IDbQueryable,
    query: string,
    params?: knex.ValueDict
  ): Promise<any>;
  executeQueryFromNamespace(
    queryable: IDbQueryable,
    queryNamespace: string,
    queryName: string,
    params?: knex.ValueDict
  ): Promise<any>;
  getDbSession(sessionName: string): IDbSession;
  startTransaction(dbSession: IDbSession): Promise<IDbTransaction>;
  commitTransaction(trx: IDbTransaction): Promise<void>;
  rollbackTransaction(trx: IDbTransaction): Promise<void>;
}

export interface IDbQueryable {
  multipleResultSet(
    queryString: string,
    params: knex.ValueDict
  ): Promise<any>;
  query(
    queryString: string,
    params: knex.ValueDict
  ): Promise<any>;
}

export interface IDbSession extends IDbQueryable {
  transaction(): Promise<IDbTransaction>;
}

export interface IDbTransaction extends IDbQueryable {
  rollback(): Promise<void>;
  commit(): Promise<void>;
  batchInsert(
    tableName: string,
    data: any[]
  ): Promise<any>;
}

export interface ISessionConfig {
  name: string;
  type: string;
  connection: IConnectionConfig;
}

export interface IConnectionConfig {
  host: string;
  user: string;
  password: string;
  database: string;
}

// export interface IDbQueryable {
//   multipleResultSet(queryString: string, params: knex.ValueDict): Promise<any>;
// }

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
