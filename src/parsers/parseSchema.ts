import { app, keywords } from '@app-macg/config';
import { controllers } from '@app-macg/controllers';
import { models } from '@app-macg/models';
import { refs } from '@app-macg/refs';
import { schemas } from '@app-macg/schemas';

export const parseSchema = (serviceName, schemaName, schema) => {
  const { appRef } = refs.parse({ serviceName });

  const { baseName, baseNameUcFirst, methodName, methodNameLcase, fields } =
    schemas.parse({ schema, schemaName });

  const { controllerInterfaceName, controllerName } = controllers.derive({
    baseName,
    baseNameUcFirst,
    methodName,
  });

  const {
    modelInstanceName,
    modelInterfaceName,
    modelInterfacePath,
    modelName,
    modelPrimaryKeyName,
  } = models.derive({
    baseName,
    baseNameUcFirst,
    serviceName,
  });

  return {
    app,
    appRef,
    baseName,
    baseNameUcFirst,
    controllerInterfaceName,
    controllerName,
    fields,
    keywords,
    methodName,
    methodNameLcase,
    modelInstanceName,
    modelInterfaceName,
    modelInterfacePath,
    modelName,
    modelPrimaryKeyName,
    serviceName,
  };
};
