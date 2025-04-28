import { getRevisedFieldsPerParsedSchema } from './getRevisedFieldsPerParsedSchema';

export const getRevisedFieldsPerParsedSchemas = ({ parsedSchemas }) =>
  parsedSchemas.map((parsedSchema) => getRevisedFieldsPerParsedSchema({ parsedSchema }));
