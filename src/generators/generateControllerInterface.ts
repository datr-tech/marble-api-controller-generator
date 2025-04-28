import { controllers } from '@app-macg/controllers';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateControllerInterface = (parsedSchema, suffix) => {
  const { baseName, controllerInterfaceName, methodName } = parsedSchema;
  const templateName = controllers.getInterfaceTemplateName(methodName, suffix);

  return {
    baseName,
    contents: fsTemplate.getContents(templateName, parsedSchema),
    name: controllerInterfaceName,
  };
};
