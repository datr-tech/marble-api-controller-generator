import { controllerKeyword, interfacePrefix } from '@app-macg/config';

export const deriveControllerInterfaceName = (baseNameUpperFirst, methodName) =>
  interfacePrefix +
  baseNameUpperFirst +
  controllerKeyword +
  methodName +
  baseNameUpperFirst;
