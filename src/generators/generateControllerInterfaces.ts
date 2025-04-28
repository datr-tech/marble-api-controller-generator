import { generateControllerInterface } from './generateControllerInterface';

export const generateControllerInterfaces = (
  parsedSchemas,
  suffix = '',
  outputType = '',
) =>
  parsedSchemas.map((parsedSchema) =>
    generateControllerInterface(parsedSchema, suffix, outputType),
  );
