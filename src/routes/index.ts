import { Router } from 'express';
import { IController } from '../common/interfaces/icontroller';
import { HttpMethod } from '../common/interfaces/http-method';
import { getLogger } from 'log4js';
import { container } from '../common/ioc-config';
import { IOCTYPES } from '../common/ioc-types';
import { IMyProfileController } from '../common/interfaces/controllers/imy-profile-controller';
import { ILoginController } from '../common/interfaces/controllers/ilogin-controller';

const router = Router();
const logger = getLogger();
logger.info('Registering routes');

function registerRoute(router: Router, controller: IController) {
  logger.info(`Registering controller ${controller.routeName}`);
  switch (controller.method) {
    case HttpMethod.Get:
      router.get(
        controller.routeName,
        controller.authorisation(),
        controller.requestAndSchemaValidation(),
        controller.businessValidation(),
        controller.execution()
      );
      break;
    case HttpMethod.Post:
      router.post(
        controller.routeName,
        controller.authorisation(),
        controller.requestAndSchemaValidation(),
        controller.businessValidation(),
        controller.execution()
      );
      break;
    case HttpMethod.Put:
      router.put(
        controller.routeName,
        controller.authorisation(),
        controller.requestAndSchemaValidation(),
        controller.businessValidation(),
        controller.execution()
      );
      break;
    case HttpMethod.Delete:
      router.delete(
        controller.routeName,
        controller.authorisation(),
        controller.requestAndSchemaValidation(),
        controller.businessValidation(),
        controller.execution()
      );
      break;
    default:
      logger.info(`Http Method [${controller.method}] doesn't exist`);
      break;
  }
}

const myProfileController = container.get<IMyProfileController>(
  IOCTYPES.myProfileController
);
const loginController = container.get<ILoginController>(
  IOCTYPES.loginController
);

registerRoute(router, myProfileController);
registerRoute(router, loginController);

export { router };
