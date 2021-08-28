import { MongoClient } from 'mongodb';

export interface IMyProfileDataLayer {
  getMyProfileDetails(userId: string, client: MongoClient): Promise<any>;

}