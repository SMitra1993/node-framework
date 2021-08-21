import 'reflect-metadata';

import { IHelloDataLayer } from './interfaces/ihello-data-layer';
import { HelloDataLayer } from '../data-layers/hello-data-layer';
import { IHelloController } from './interfaces/ihello-controller';
import { HelloController } from '../controllers/hello-controller';

import { IOCTYPES } from './ioc-types';

import { Container } from 'inversify';
import { IDbManager } from './config/idb-manager';
import { DbManager } from './config/db-manager';
import { MyProfileController } from '../controllers/my-profile-controller';
import { IMyProfileController } from './interfaces/controllers/imy-profile-controller';
import { IMyProfileDataLayer } from './interfaces/data-layers/imy-profile-data-layer';
import { MyProfileDataLayer } from '../data-layers/my-profile-data-layer';
const container = new Container();

container.bind<IDbManager>(IOCTYPES.dbManager)
  .to(DbManager);
container.bind<IHelloDataLayer>(IOCTYPES.helloDataLayer)
  .to(HelloDataLayer);
container.bind<IHelloController>(IOCTYPES.helloController)
  .to(HelloController);
container.bind<IMyProfileController>(IOCTYPES.myProfileController)
  .to(MyProfileController);
container.bind<IMyProfileDataLayer>(IOCTYPES.myProfileDataLayer)
  .to(MyProfileDataLayer);
export { container };
