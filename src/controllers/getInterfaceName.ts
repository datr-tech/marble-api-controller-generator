import { keywords } from '@app-macg/config';

export const getInterfaceName = (baseNameUpperFirst, methodName) =>
  keywords.interfacePrefix +
  baseNameUpperFirst +
  keywords.controller +
  methodName +
  baseNameUpperFirst;
