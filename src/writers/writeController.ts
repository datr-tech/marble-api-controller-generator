import { datrTechRoot } from '@app-macg/config';
import { logger } from '@datr.tech/leith-common-logger';
import fs from 'node:fs';
import path from 'node:path';

export const writeController = (controllerDef, service) => {
  const { contents, dirName, name } = controllerDef;
  const dirPath = path.resolve(
    datrTechRoot,
    `api-${service}/src/api/controllers/${dirName}`,
  );
  const controllerPath = `${dirPath}/${name}.ts`;

  const doesDirPathExist = fs.existsSync(dirPath);
  const doesControllerPathExist = fs.existsSync(controllerPath);

  if (!doesDirPathExist) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  if (doesControllerPathExist) {
    fs.unlinkSync(controllerPath);
  }

  fs.writeFileSync(controllerPath, contents, 'utf8');
  logger.info(`ADD CONTROLLER: ${controllerPath}`);
};
