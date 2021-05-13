import { IDbManager } from './idb-manager';
import mongodb from 'mongodb';
import { injectable } from 'inversify';

@injectable()
export class DbManager implements IDbManager {
  public createDbClient(): mongodb.MongoClient {
    const uri =
      'mongodb://souvik:souvik@127.0.0.1:27017/admin?retryWrites=true&writeConcern=majority';
      const client = new mongodb.MongoClient(uri, { useNewUrlParser: true });

      return client;
  }
}
