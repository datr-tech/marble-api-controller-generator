import { parseSchema } from './parseSchema';

export const parseSchemas = (serviceName, schemas) =>
  Object.keys(schemas).map((schemaName) => {
    const schema = schemas[schemaName];
    const parsedSchema = parseSchema(serviceName, schemaName, schema);

    return parsedSchema;
  });
