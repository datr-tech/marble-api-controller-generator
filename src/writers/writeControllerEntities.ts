import { writeControllerEntity } from './writeControllerEntity';

export const writeControllerEntities = (controllerEntityDefs, service) =>
  controllerEntityDefs.map((controllerEntityDef) =>
    writeControllerEntity(controllerEntityDef, service),
  );
