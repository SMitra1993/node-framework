import 'reflect-metadata';

import { IOCTYPES } from './ioc-types';

import { Container } from 'inversify';
import { IDbManager } from './config/idb-manager';
import { DbManager } from './config/db-manager';
import { MyProfileController } from '../controllers/my-profile-controller';
import { IMyProfileController } from './interfaces/controllers/imy-profile-controller';
import { IMyProfileDataLayer } from './interfaces/data-layers/imy-profile-data-layer';
import { MyProfileDataLayer } from '../data-layers/my-profile-data-layer';
import { ILoginController } from './interfaces/controllers/ilogin-controller';
import { LoginController } from '../controllers/login-controller';
import { ILoginDataLayer } from './interfaces/data-layers/ilogin-data-layer';
import { LoginDataLayer } from '../data-layers/login-data-layer';
const container = new Container();

container.bind<IDbManager>(IOCTYPES.dbManager).to(DbManager);
container
  .bind<IMyProfileController>(IOCTYPES.myProfileController)
  .to(MyProfileController);
container
  .bind<ILoginController>(IOCTYPES.loginController)
  .to(LoginController);
container
  .bind<IMyProfileDataLayer>(IOCTYPES.myProfileDataLayer)
  .to(MyProfileDataLayer);
container
  .bind<ILoginDataLayer>(IOCTYPES.loginDataLayer)
  .to(LoginDataLayer);
export { container };
