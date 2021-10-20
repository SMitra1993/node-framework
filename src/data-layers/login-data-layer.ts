import { injectable } from 'inversify';
import { getLogger } from 'log4js';
import { MongoClient } from 'mongodb';
import { ILoginDataLayer } from '../common/interfaces/data-layers/ilogin-data-layer';

@injectable()
export class LoginDataLayer implements ILoginDataLayer {
  private logger = getLogger();

  async getMyProfileDetails(userId: string, client: MongoClient): Promise<any> {
    const collection = client.db('transaction').collection('userDetails');
    const query = { emailId: userId };
    // movie = await collection.findOne(query);
    const queryResult = await collection.findOne(query);

    if (queryResult) {
      return queryResult;
    }

    return null;
  }
}
