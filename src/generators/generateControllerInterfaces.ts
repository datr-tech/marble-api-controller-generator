import { generateControllerInterface } from './generateControllerInterface';

export const generateControllerInterfaces = (parsedSchemas, suffix) =>
  parsedSchemas.map((parsedSchema) => generateControllerInterface(parsedSchema, suffix));
