import { writeController } from './writeController';

export const writeControllers = (controllerDefs, service) =>
  controllerDefs.map((controllerDef) => writeController(controllerDef, service));
