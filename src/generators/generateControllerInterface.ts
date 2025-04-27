import { deriveControllerInterfaceTemplateName } from '@app-macg/utils';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateControllerInterface = (parsedSchema) => {
  const { baseName, controllerInterfaceName, methodName } = parsedSchema;
  const templateName = deriveControllerInterfaceTemplateName(methodName);

  return {
    baseName,
    contents: fsTemplate.getContents(templateName, parsedSchema),
    name: controllerInterfaceName,
  };
};
