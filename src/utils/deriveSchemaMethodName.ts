import { schemaMethodsMap } from '@app-marble-api-controller-generator/maps';

export const deriveSchemaMethodName = (schemaName) => {
  let schemaMethodName = '';

  for (const methodMapItem of schemaMethodsMap) {
    if (schemaName.includes(methodMapItem.router)) {
      schemaMethodName = methodMapItem.controller;
      break;
    }
  }

  return schemaMethodName;
};
