import { injectable } from 'inversify';
import { getLogger } from 'log4js';
// import { MongoClient } from 'mongodb';
import { ILoginDataLayer } from '../common/interfaces/data-layers/ilogin-data-layer';
import { user } from '../models/user-model';

@injectable()
export class LoginDataLayer implements ILoginDataLayer {
  private logger = getLogger();

  async verifyUserDetail(userId: string): Promise<any> {
    const queryResult = await user.findOne({ emailId: userId }).exec();

    if (queryResult) {
      return queryResult;
    }

    return undefined;
  }
}
