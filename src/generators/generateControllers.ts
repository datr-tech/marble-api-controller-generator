import { generateController } from './generateController';

export const generateControllers = (parsedSchemas) =>
  parsedSchemas.map((parsedSchema) => generateController(parsedSchema));
