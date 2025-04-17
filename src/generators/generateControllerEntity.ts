import fs from 'node:fs';
import path from 'node:path';
import Handlebars from 'handlebars';

export const generateControllerEntity = (entityName, controllerDefsPerBaseName) => {
  const templatePath = path.resolve(`./src/templates/controllerEntityTemplate.hbs`);

  const controllers = controllerDefsPerBaseName.map((controllerDefPerBaseName) => {
    const { name } = controllerDefPerBaseName;
    const nameComponents = name.split('Controller');
    const methodName = nameComponents[1];
    const methodNameLowerFirst = methodName.charAt(0).toLowerCase() + methodName.slice(1);

    return {
      name,
      methodName: methodNameLowerFirst,
    };
  });

  const templateParams = { controllers, entityName };
  const templateStr = fs.readFileSync(templatePath, { encoding: 'utf8', flag: 'r' });
  const templateFn = Handlebars.compile(templateStr, { noEscape: true, preventIndent: true, ignoreStandalone: true });

  const entityDef = {
    name: entityName,
    contents: templateFn(templateParams),
  };

  return entityDef;
};
