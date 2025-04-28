import { keywords } from '@app-macg/config';
import { fields } from '@app-macg/fields';
import {
  generateBaseStat,
  generateControllerEntities,
  generateControllerInterfaceIndex,
  generateControllerInterfaces,
  generateControllers,
} from '@app-macg/generators';
import { parseSchemas } from '@app-macg/parsers';
import {
  createControllerDir,
  removeControllerDir,
  writeBaseStat,
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

  const baseStatDef = generateBaseStat();
  const controllerDefs = generateControllers(parsedSchemasRevised);
  const controllerEntityDefs = generateControllerEntities(controllerDefs);

  removeControllerDir(service);
  createControllerDir(service);

  writeBaseStat(baseStatDef, service);
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
  const controllerInterfaceOutputErrorDefs = generateControllerInterfaces(
    parsedSchemasRevised,
    keywords.output,
    keywords.error,
  );
  const controllerInterfaceOutputSuccessDefs = generateControllerInterfaces(
    parsedSchemasRevised,
    keywords.output,
    keywords.success,
  );
  const controllerInterfaceIndexDef = generateControllerInterfaceIndex({
    controllerInterfaceDefs,
    controllerInterfaceInputDefs,
    controllerInterfaceOutputDefs,
    controllerInterfaceOutputErrorDefs,
    controllerInterfaceOutputSuccessDefs,
  });

  writeInterfaces(controllerInterfaceDefs, service);
  writeInterfaces(controllerInterfaceInputDefs, service);
  writeInterfaces(controllerInterfaceOutputDefs, service);
  writeInterfaces(controllerInterfaceOutputErrorDefs, service);
  writeInterfaces(controllerInterfaceOutputSuccessDefs, service);
  writeInterfaceIndex(controllerInterfaceIndexDef, service);
});
