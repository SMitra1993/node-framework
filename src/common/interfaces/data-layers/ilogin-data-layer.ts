import { MongoClient } from 'mongodb';

export interface ILoginDataLayer {
  verifyUserDetail(userId: string, client: MongoClient): Promise<any>;

}