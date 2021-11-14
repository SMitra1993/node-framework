import { IDbManager } from './idb-manager';
// import mongodb from 'mongodb';
import { injectable } from 'inversify';
import mongoose from 'mongoose';

@injectable()
export class DbManager implements IDbManager {
  public async createDbClient(): Promise<any> {
    const uri =
      'mongodb://localhost:27017/transaction';
      // const client = new mongodb.MongoClient(uri, { useNewUrlParser: true });

      return await mongoose.connect(uri);
  }
}
