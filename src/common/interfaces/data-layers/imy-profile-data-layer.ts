import { MongoClient } from 'mongodb';

export interface IMyProfileDataLayer {
  getMyProfileDetails(client: MongoClient): Promise<any>;

}