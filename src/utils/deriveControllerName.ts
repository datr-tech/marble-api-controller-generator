import { controllerKeyword } from '@app-macg/config';

export const deriveControllerName = (baseName, baseNameUpperFirst, methodName) =>
  baseName + controllerKeyword + methodName + baseNameUpperFirst;
