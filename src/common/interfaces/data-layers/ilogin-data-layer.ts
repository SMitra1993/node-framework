// import { MongoClient } from 'mongodb';

export interface ILoginDataLayer {
  verifyUserDetail(userId: string): Promise<any>;

}