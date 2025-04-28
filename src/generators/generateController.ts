import { keywords } from '@app-macg/config';
import { controllers } from '@app-macg/controllers';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';
import { generateControllerImports } from './generateControllerImports';
import { generateControllerJsDoc } from './generateControllerJsDoc';
import { generateControllerTryCatchFooter } from './generateControllerTryCatchFooter';
import { generateControllerTryCatchHeader } from './generateControllerTryCatchHeader';

export const generateController = (parsedSchema) => {
  const { baseName, controllerName, methodName } = parsedSchema;
  const dirName = baseName + keywords.controller;
  const templateName = controllers.getTemplateName(methodName);
  const templateData = { ...parsedSchema };
  templateData.usePayload = methodName == keywords.update;

  templateData.imports = generateControllerImports({ parsedSchema });
  templateData.jsdoc = generateControllerJsDoc({ parsedSchema });
  templateData.tryCatchFooter = generateControllerTryCatchFooter({ parsedSchema });
  templateData.tryCatchHeader = generateControllerTryCatchHeader({ parsedSchema });

  return {
    baseName,
    contents: fsTemplate.getContents(templateName, templateData),
    dirName,
    name: controllerName,
  };
};
