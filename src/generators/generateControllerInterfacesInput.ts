import { generateControllerInterfaceInput } from './generateControllerInterfaceInput';

export const generateControllerInterfacesInput = (parsedSchemas) =>
  parsedSchemas.map((parsedSchema) => generateControllerInterfaceInput(parsedSchema));
