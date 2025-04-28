import { keywords } from '@app-macg/config';
import { fields } from '@app-macg/fields';
import {
  generateControllerEntities,
  generateControllerInterfaceIndex,
  generateControllerInterfaces,
  generateControllers,
} from '@app-macg/generators';
import { parseSchemas } from '@app-macg/parsers';
import {
  createControllerDir,
  removeControllerDir,
  writeControllerEntities,
  writeControllerEntityIndexes,
  writeControllers,
  writeInterfaceIndex,
  writeInterfaces,
} from '@app-macg/writers';

import * as schemas from '@datr.tech/cargo-router-validation-schemas';
import 'dotenv/config';

Object.keys(schemas).forEach((service) => {
  const schemasPerService = schemas[service];
  const parsedSchemas = parseSchemas(service, schemasPerService);
  const parsedSchemasRevised = fields.getRevisedFieldsPerParsedSchemas({ parsedSchemas });
  const controllerDefs = generateControllers(parsedSchemasRevised);
  const controllerEntityDefs = generateControllerEntities(controllerDefs);

  removeControllerDir(service);
  createControllerDir(service);
  writeControllers(controllerDefs, service);
  writeControllerEntities(controllerEntityDefs, service);
  writeControllerEntityIndexes(controllerEntityDefs, service);

  const controllerInterfaceDefs = generateControllerInterfaces(parsedSchemasRevised);
  const controllerInterfaceInputDefs = generateControllerInterfaces(
    parsedSchemasRevised,
    keywords.input,
  );
  const controllerInterfaceOutputDefs = generateControllerInterfaces(
    parsedSchemasRevised,
    keywords.output,
  );
  const controllerInterfaceIndexDef = generateControllerInterfaceIndex({
    controllerInterfaceDefs,
    controllerInterfaceInputDefs,
    controllerInterfaceOutputDefs,
  });

  writeInterfaces(controllerInterfaceDefs, service);
  writeInterfaces(controllerInterfaceInputDefs, service);
  writeInterfaces(controllerInterfaceOutputDefs, service);
  writeInterfaceIndex(controllerInterfaceIndexDef, service);
});
