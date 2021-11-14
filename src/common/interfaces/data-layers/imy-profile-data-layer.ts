// import { MongoClient } from 'mongodb';

export interface IMyProfileDataLayer {
  getMyProfileDetails(userId: string): Promise<any>;

}