import { inputKeyword } from '@app-macg/config';
import {
  generateControllerEntities,
  generateControllerInterfaces,
  generateControllerInterfacesInput,
  generateControllers,
} from '@app-macg/generators';
import { parseSchemas } from '@app-macg/parsers';
import {
  createControllerDir,
  removeControllerDir,
  writeController,
  writeControllerEntity,
  writeControllerEntityIndex,
} from '@app-macg/writers';
import * as schemas from '@datr.tech/cargo-router-validation-schemas';
import 'dotenv/config';

const dryRun = process.env.DRY_RUN || true;

Object.keys(schemas).forEach((service) => {
  const schemasPerService = schemas[service];
  const parsedSchemas = parseSchemas(service, schemasPerService);

  const controllerDefs = generateControllers(parsedSchemas);
  const controllerEntityDefs = generateControllerEntities(controllerDefs);
  const controllerInterfaceDefs = generateControllerInterfaces(parsedSchemas);
  const controllerInterfaceInputDefs = generateControllerInterfacesInput(
    parsedSchemas,
    inputKeyword,
  );
  //const controllerInterfaceOutputDefs = generateControllerInterfaces(parsedSchemas, outputKeyword);

  console.log({ controllerInterfaceDefs });
  console.log({ controllerInterfaceInputDefs });

  if (!dryRun) {
    removeControllerDir(service);
    createControllerDir(service);

    controllerDefs.forEach((controllerDef) => writeController(controllerDef, service));
    controllerEntityDefs.forEach((controllerEntityDef) =>
      writeControllerEntity(controllerEntityDef, service),
    );
    controllerEntityDefs.forEach((controllerEntityDef) =>
      writeControllerEntityIndex(controllerEntityDef, service),
    );
  }
});
