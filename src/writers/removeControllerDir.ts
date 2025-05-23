import { datrTechRoot } from '@app-macg/config';
import fs from 'node:fs';
import path from 'node:path';
import { rimraf } from 'rimraf';

export const removeControllerDir = (service) => {
  const dirPath = path.resolve(datrTechRoot, `api-${service}/src/api/controllers`);
  const doesDirPathExist = fs.existsSync(dirPath);

  if (doesDirPathExist) {
    rimraf(dirPath);
  }
};
