import { getBaseName } from './getBaseName';
import { getFields } from './getFields';
import { getMethodName } from './getMethodName';

export const parse = ({ schema, schemaName }) => {
  const baseName = getBaseName({ schemaName });
  const baseNameUcFirst = baseName.charAt(0).toUpperCase() + baseName.slice(1);
  const fields = getFields({ schema });
  const methodName = getMethodName({ schemaName });
  const methodNameLcase = methodName.toLowerCase();

  return {
    baseName,
    baseNameUcFirst,
    methodName,
    methodNameLcase,
    fields,
  };
};
