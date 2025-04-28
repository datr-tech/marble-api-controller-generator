import { keywords } from '@app-macg/config';

export const getName = (baseName, baseNameUpperFirst, methodName) =>
  baseName + keywords.controller + methodName + baseNameUpperFirst;
