import fs from 'node:fs';
import path from 'node:path';
import { freightMonorepoRoot } from '@app/config';

export const writeController = (controllerDef, service) => {
  const { contents, dirName, name } = controllerDef;
  const dirPath = path.resolve(freightMonorepoRoot, `apps/${service}-api/src/api/controllers/${dirName}`);
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
};
