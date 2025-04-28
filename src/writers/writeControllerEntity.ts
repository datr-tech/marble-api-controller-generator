import { datrTechRoot } from '@app-macg/config';
import { logger } from '@datr.tech/leith-common-logger';
import fs from 'node:fs';
import path from 'node:path';

export const writeControllerEntity = (controllerEntityDef, service) => {
  const { contents, name } = controllerEntityDef;
  const dirPath = path.resolve(
    datrTechRoot,
    `api-${service}/src/api/controllers/${name}`,
  );
  const controllerEntityPath = `${dirPath}/${name}.ts`;
  const doesDirPathExist = fs.existsSync(dirPath);
  const doesControllerPathExist = fs.existsSync(controllerEntityPath);

  if (!doesDirPathExist) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  if (doesControllerPathExist) {
    fs.unlinkSync(controllerEntityPath);
  }

  fs.writeFileSync(controllerEntityPath, contents, 'utf8');
  logger.info(`ADD CONTROLLER ENTITY: ${controllerEntityPath}`);
};
