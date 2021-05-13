import { injectable } from 'inversify';
import { getLogger } from 'log4js';
import { IHello } from '../common/interfaces/ihello';
import { IHelloDataLayer } from '../common/interfaces/ihello-data-layer';
import { IDbQueryable, IDbTransaction } from '../common/db/db-interface';
import { HELLO_QUERIES } from './queries/hello-queries';
import { SETTLEMENT_HOME_QUERIES } from './queries/settlement/home/settlement-home-queries';
import { MongoClient } from 'mongodb';

@injectable()
export class HelloDataLayer implements IHelloDataLayer {
  private logger = getLogger();

  async getBillingDetails(client: MongoClient): Promise<any> {
    const collection = client.db('transaction').collection('billingDetails');
    const query = { gstinNumber: '21AAAAAA0000A1Z5' };
    // movie = await collection.findOne(query);
    const queryResult = await collection.findOne(query);

    if (queryResult) {
      return queryResult;
    }

    return null;
  }

  async save(trx: IDbTransaction, hello: IHello): Promise<number> {
    this.logger.info(`saving hello [${hello.name}]`);
    // todo
    await trx.query(HELLO_QUERIES.insertHello, {
      name: hello.name,
      world: hello.world,
    });

    for (const helloChild of hello.children) {
      await trx.query(HELLO_QUERIES.insertHelloChild, {
        hello: hello.name,
        firstName: helloChild.firstName,
        surname: helloChild.surname,
        dob: helloChild.dob ? helloChild.dob : null,
      });
    }

    return 1;
  }

  async getHello(queryable: IDbQueryable, name: string): Promise<IHello> {
    const queryResult = await queryable.query(HELLO_QUERIES.getHello, {
      name,
    });
    if (queryResult.length > 0) {
      return queryResult[0];
    }

    return null;
  }

  async filterHello(
    queryable: IDbQueryable,
    search: string
  ): Promise<IHello[]> {
    // todo
    return [];
  }

  // / orcale server
  async executeOracle(trx: IDbTransaction, id: string): Promise<string[]> {
    const queryResult = await trx.query(HELLO_QUERIES.getoracleSPResult, {});
    if (queryResult.length > 0) {
      return queryResult;
    }
    return null;
  }

  async executeSQLSP(queryable: IDbQueryable): Promise<any[]> {
    const queryResult = await queryable.query(
      SETTLEMENT_HOME_QUERIES.getHomeData,
      {}
    );
    if (queryResult.length > 0) {
      return queryResult;
    }

    return null;
  }
}
