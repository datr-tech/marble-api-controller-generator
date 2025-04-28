import { datrTechRoot } from '@app-macg/config';
import { logger } from '@datr.tech/leith-common-logger';
import fs from 'node:fs';
import path from 'node:path';

export const writeInterface = (interfaceDef, service) => {
  const { contents, name } = interfaceDef;
  const dirPath = path.resolve(
    datrTechRoot,
    `api-${service}/src/interfaces/api/controllers`,
  );
  const interfacePath = `${dirPath}/${name}.ts`;
  const doesDirPathExist = fs.existsSync(dirPath);
  const doesInterfacePathExist = fs.existsSync(interfacePath);

  if (!doesDirPathExist) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  if (doesInterfacePathExist) {
    fs.unlinkSync(interfacePath);
  }

  fs.writeFileSync(interfacePath, contents, 'utf8');
  logger.info(`ADD INTERFACE: ${interfacePath}`);
};
