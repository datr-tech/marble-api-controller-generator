import { schemasPerService } from '@freight/services-schemas';
import { generateController, generateControllerEntities } from '@app-marble-api-controller-generator/generators';
import { parseSchemas } from '@app-marble-api-controller-generator/parsers';
import { createControllerDir, removeControllerDir, writeController, writeControllerEntity, writeControllerEntityIndex } from '@app-marble-api-controller-generator/writers';

schemasPerService.forEach((serviceSchemas) => {
  const { service, schemas } = serviceSchemas;
  const parsedSchemas = parseSchemas(service, schemas);
  const controllerDefs = parsedSchemas.map((parsedSchema) => generateController(parsedSchema));
  const controllerEntityDefs = generateControllerEntities(controllerDefs);

  removeControllerDir(service);
  createControllerDir(service);

  controllerDefs.forEach((controllerDef) => writeController(controllerDef, service));
  controllerEntityDefs.forEach((controllerEntityDef) => writeControllerEntity(controllerEntityDef, service));
  controllerEntityDefs.forEach((controllerEntityDef) => writeControllerEntityIndex(controllerEntityDef, service));
});
