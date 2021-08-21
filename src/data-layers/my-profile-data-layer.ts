import { injectable } from 'inversify';
import { getLogger } from 'log4js';
import { MongoClient } from 'mongodb';
import { IMyProfileDataLayer } from '../common/interfaces/data-layers/imy-profile-data-layer';

@injectable()
export class MyProfileDataLayer implements IMyProfileDataLayer {
  private logger = getLogger();

  async getMyProfileDetails(client: MongoClient): Promise<any> {
    const collection = client.db('transaction').collection('billingDetails');
    const query = { gstinNumber: '21AAAAAA0000A1Z5' };
    // movie = await collection.findOne(query);
    const queryResult = await collection.findOne(query);

    if (queryResult) {
      return queryResult;
    }

    return null;
  }
}
