import { MongoClient } from 'mongodb';

export interface ILoginDataLayer {
  getMyProfileDetails(userId: string, client: MongoClient): Promise<any>;

}