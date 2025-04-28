import { schemaMethodsMap } from '@app-macg/maps';

export const getMethodName = ({ schemaName }) => {
  let schemaMethodName = '';

  for (const methodMapItem of schemaMethodsMap) {
    if (schemaName.includes(methodMapItem.router)) {
      schemaMethodName = methodMapItem.controller;
      break;
    }
  }

  return schemaMethodName;
};
