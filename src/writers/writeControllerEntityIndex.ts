import { datrTechRoot } from '@app-macg/config';
import { logger } from '@datr.tech/leith-common-logger';
import fs from 'node:fs';
import path from 'node:path';

export const writeControllerEntityIndex = (controllerEntityDef, service) => {
  const { name } = controllerEntityDef;
  const dirPath = path.resolve(
    datrTechRoot,
    `api-${service}/src/api/controllers/${name}`,
  );
  const entityIndexPath = `${dirPath}/index.ts`;
  const doesEntityIndexPathExist = fs.existsSync(entityIndexPath);

  if (doesEntityIndexPathExist) {
    fs.unlinkSync(entityIndexPath);
  }

  const contents = `export { ${name} } from "./${name}";`;
  fs.writeFileSync(entityIndexPath, contents, 'utf8');
  logger.info(`ADD CONTROLLER ENTITY INDEX: ${entityIndexPath}`);
};
