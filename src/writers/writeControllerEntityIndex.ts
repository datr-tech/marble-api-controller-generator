import fs from 'node:fs';
import path from 'node:path';

export const writeControllerEntityIndex = (controllerEntityDef, service) => {
  const { name } = controllerEntityDef;
  const dirPath = path.resolve(`./../../apps/${service}-api/src/api/controllers/${name}`);
  const entityIndexPath = `${dirPath}/index.ts`;
  const doesDirPathExist = fs.existsSync(dirPath);
  const doesEntityIndexPathExist = fs.existsSync(entityIndexPath);

  if (!doesDirPathExist) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  if (doesEntityIndexPathExist) {
    fs.unlinkSync(entityIndexPath);
  }

  const contents = `export { ${name} } from "./${name}";`;
  fs.writeFileSync(entityIndexPath, contents, 'utf8');
};
