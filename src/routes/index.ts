import { Router } from 'express';
import { IController } from '../common/interfaces/icontroller';
import { IHelloController } from '../common/interfaces/ihello-controller';
import { HttpMethod } from '../common/interfaces/http-method';
import { getLogger } from 'log4js';
import { container } from '../common/ioc-config';
import { IOCTYPES } from '../common/ioc-types';

const router = Router();
const logger = getLogger();
logger.info('Registering routes');

function registerRoute(router: Router, controller: IController) {
  logger.info(`Registering controller ${controller.routeName}`);
  switch (controller.method) {
    case HttpMethod.Get:
      router.get(
        controller.routeName,
        // controller.authorisation(),
        controller.requestAndSchemaValidation(),
        controller.businessValidation(),
        controller.execution()
      );
      break;
    case HttpMethod.Post:
      router.post(
        controller.routeName,
        // controller.authorisation(),
        controller.requestAndSchemaValidation(),
        controller.businessValidation(),
        controller.execution()
      );
      break;
    case HttpMethod.Put:
      router.put(
        controller.routeName,
        // controller.authorisation(),
        controller.requestAndSchemaValidation(),
        controller.businessValidation(),
        controller.execution()
      );
      break;
    case HttpMethod.Delete:
      router.delete(
        controller.routeName,
        // controller.authorisation(),
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

const helloController = container.get<IHelloController>(
  IOCTYPES.helloController
);

registerRoute(router, helloController);

export { router };
