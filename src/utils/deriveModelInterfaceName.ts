import { interfacePrefix, modelKeyword } from '@app-macg/config';

export const deriveModelInterfaceName = (baseNameUpperFirst) =>
  interfacePrefix + baseNameUpperFirst + modelKeyword;
