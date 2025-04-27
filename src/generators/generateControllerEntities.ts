import { generateControllerEntity } from './generateControllerEntity';

export const generateControllerEntities = (controllerDefs) => {
  const entityBaseNames = controllerDefs.reduce((acc, controllerDef) => {
    const { baseName, dirName } = controllerDef;

    if (typeof acc[dirName] === 'undefined') {
      acc[dirName] = baseName;
    }

    return acc;
  }, {});

  const controllerEntityDefs = Object.keys(entityBaseNames).map((entityName) => {
    const baseName = entityBaseNames[entityName];
    const controllerDefsPerBaseName = controllerDefs.filter(
      (controllerDef) => controllerDef.baseName == baseName,
    );
    const controllerEntityDef = generateControllerEntity(
      entityName,
      controllerDefsPerBaseName,
    );

    return controllerEntityDef;
  });

  return controllerEntityDefs;
};
