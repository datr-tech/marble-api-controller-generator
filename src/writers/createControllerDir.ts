import { datrTechRoot } from '@app-macg/config';
import fs from 'node:fs';
import path from 'node:path';

export const createControllerDir = (service) => {
  const dirPath = path.resolve(datrTechRoot, `api-${service}/src/api/controllers`);
  const doesDirPathExist = fs.existsSync(dirPath);

  if (!doesDirPathExist) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};
