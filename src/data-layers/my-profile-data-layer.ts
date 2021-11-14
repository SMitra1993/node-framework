import { injectable } from 'inversify';
import { getLogger } from 'log4js';
// import { MongoClient } from 'mongodb';
import { user } from '../models/user-model';
import { IMyProfileDataLayer } from '../common/interfaces/data-layers/imy-profile-data-layer';

@injectable()
export class MyProfileDataLayer implements IMyProfileDataLayer {
  private logger = getLogger();

  async getMyProfileDetails(userId: string): Promise<any> {

    const queryResult = await user.findOne({ emailId: userId }).exec();

    if (queryResult) {
      return queryResult;
    }

    return undefined;
  }
}
