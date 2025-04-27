import { controllerKeyword } from '@app-macg/config';
import { deriveTemplateName } from '@app-macg/utils';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateController = ({ ...parsedSchema }) => {
  const { baseName, controllerName, methodName } = parsedSchema;
  const dirName = baseName + controllerKeyword;
  const templateName = deriveTemplateName(methodName);

  return {
    baseName,
    contents: fsTemplate.getContents(templateName, parsedSchema),
    dirName,
    name: controllerName,
  };
};
