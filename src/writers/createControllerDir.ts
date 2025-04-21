import fs from 'node:fs';
import path from 'node:path';
import { freightMonorepoRoot } from '@app-marble-api-controller-generator/config';

export const createControllerDir = (service) => {
  const dirPath = path.resolve(freightMonorepoRoot, `apps/${service}-api/src/api/controllers`);
  const doesDirPathExist = fs.existsSync(dirPath);

  if (!doesDirPathExist) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};
