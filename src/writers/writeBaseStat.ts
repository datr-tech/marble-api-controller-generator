import { datrTechRoot } from '@app-macg/config';
import { logger } from '@datr.tech/leith-common-logger';
import fs from 'node:fs';
import path from 'node:path';

export const writeBaseStat = (baseStatDef, service) => {
  const { contents, name } = baseStatDef;
  const dirPath = path.resolve(datrTechRoot, `api-${service}/src/api/util`);
  const baseStatPath = `${dirPath}/${name}.ts`;
  const doesDirPathExist = fs.existsSync(dirPath);
  const doesBaseStatPathExist = fs.existsSync(baseStatPath);

  if (!doesDirPathExist) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  if (doesBaseStatPathExist) {
    fs.unlinkSync(baseStatPath);
  }

  fs.writeFileSync(baseStatPath, contents, 'utf8');
  logger.info(`ADD BASE STAT: ${baseStatPath}`);
};
