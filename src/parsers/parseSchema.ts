import {
  deriveAppRef,
  deriveControllerInterfaceName,
  deriveControllerName,
  deriveModelInstanceName,
  deriveModelInterfaceName,
  deriveModelInterfacePath,
  deriveModelName,
  deriveModelPrimaryKeyName,
  deriveSchemaBaseName,
  deriveSchemaMethodName,
} from '@app-macg/utils';

export const parseSchema = (serviceName, schemaName, schema) => {
  const appRef = deriveAppRef(serviceName);
  const baseName = deriveSchemaBaseName(schemaName);
  const baseNameUpperFirst = baseName.charAt(0).toUpperCase() + baseName.slice(1);
  const methodName = deriveSchemaMethodName(schemaName);
  const controllerInterfaceName = deriveControllerInterfaceName(
    baseNameUpperFirst,
    methodName,
  );
  const controllerName = deriveControllerName(baseName, baseNameUpperFirst, methodName);
  const modelInstanceName = deriveModelInstanceName(baseName);
  const modelInterfaceName = deriveModelInterfaceName(baseNameUpperFirst);
  const modelInterfacePath = deriveModelInterfacePath(serviceName, modelInterfaceName);
  const modelName = deriveModelName(baseNameUpperFirst);
  const modelPrimaryKeyName = deriveModelPrimaryKeyName(baseName);
  const fieldNames = Object.keys(schema);

  return {
    appRef,
    baseName,
    controllerInterfaceName,
    controllerName,
    fieldNames,
    methodName,
    modelInstanceName,
    modelInterfaceName,
    modelInterfacePath,
    modelName,
    modelPrimaryKeyName,
  };
};
