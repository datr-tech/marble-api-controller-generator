import { writeControllerEntityIndex } from './writeControllerEntityIndex';

export const writeControllerEntityIndexes = (controllerEntityDefs, service) =>
  controllerEntityDefs.map((controllerEntityDef) =>
    writeControllerEntityIndex(controllerEntityDef, service),
  );
