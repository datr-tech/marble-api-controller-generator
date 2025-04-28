import { controllers } from '@app-macg/controllers';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateControllerInterface = (parsedSchema, suffix, outputType) => {
  const { baseName, controllerInterfaceName, methodName } = parsedSchema;
  const templateName = controllers.getInterfaceTemplateName(
    methodName,
    suffix,
    outputType,
  );

  return {
    baseName,
    contents: fsTemplate.getContents(templateName, parsedSchema),
    name: controllerInterfaceName + suffix + outputType,
  };
};
