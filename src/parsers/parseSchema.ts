import {
  deriveControllerName,
  deriveModelInstanceName,
  deriveModelName,
  deriveModelPrimaryKeyName,
  deriveSchemaBaseName,
  deriveSchemaMethodName,
} from '@app-marble-api-controller-generator/utils';

export const parseSchema = (serviceName, schemaName, schema) => {
  const baseName = deriveSchemaBaseName(schemaName);
  const baseNameUpperFirst = baseName.charAt(0).toUpperCase() + baseName.slice(1);
  const methodName = deriveSchemaMethodName(schemaName);
  const controllerName = deriveControllerName(baseName, baseNameUpperFirst, methodName);
  const modelInstanceName = deriveModelInstanceName(baseName);
  const modelName = deriveModelName(baseNameUpperFirst);
  const modelPrimaryKeyName = deriveModelPrimaryKeyName(baseName);
  const fieldNames = Object.keys(schema);

  return {
    baseName,
    controllerName,
    fieldNames,
    methodName,
    modelInstanceName,
    modelName,
    modelPrimaryKeyName,
  };
};
