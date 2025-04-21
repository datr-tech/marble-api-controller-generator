import fs from 'node:fs';
import path from 'node:path';
import Handlebars from 'handlebars';
import { deriveTemplateName } from '@app-marble-api-controller-generator/utils';

export const generateController = ({ ...parsedSchema }) => {
  const { baseName, controllerName, methodName } = parsedSchema;

  const dirName = baseName + 'Controller';
  const templateName = deriveTemplateName(methodName);
  const templatePath = path.resolve(`./src/templates/${templateName}.hbs`);
  const templateStr = fs.readFileSync(templatePath, { encoding: 'utf8', flag: 'r' });
  const templateFn = Handlebars.compile(templateStr, { noEscape: true, preventIndent: true, ignoreStandalone: true });

  const controllerDef = {
    baseName,
    contents: templateFn(parsedSchema),
    dirName,
    name: controllerName,
  };

  return controllerDef;
};
