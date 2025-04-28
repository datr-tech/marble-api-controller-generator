import { datrTechRoot, keywords } from '@app-macg/config';
import { logger } from '@datr.tech/leith-common-logger';
import fs from 'node:fs';
import path from 'node:path';

export const writeInterfaceIndex = (interfaceIndexDef, service) => {
  const { contents } = interfaceIndexDef;
  const dirPath = path.resolve(
    datrTechRoot,
    `api-${service}/src/interfaces/api/controllers`,
  );
  const interfaceIndexPath = `${dirPath}/${keywords.index}.ts`;

  if (fs.existsSync(interfaceIndexPath)) {
    fs.unlinkSync(interfaceIndexPath);
  }

  fs.writeFileSync(interfaceIndexPath, contents, 'utf8');
  logger.info(`ADD INTERFACE INDEX: ${interfaceIndexPath}`);
};
