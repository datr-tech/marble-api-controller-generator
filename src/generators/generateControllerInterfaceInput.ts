import { createKeyword, inputKeyword, updateKeyword } from '@app-macg/config';
import {
  deriveControllerInterfaceTemplateName,
  deriveCreateFieldsFromModelInterfaceProperties,
  deriveUpdateFieldsFromModelInterfaceProperties,
} from '@app-macg/utils';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';
import * as TJS from 'typescript-json-schema';

export const generateControllerInterfaceInput = (parsedSchema) => {
  const {
    baseName,
    controllerInterfaceName,
    methodName,
    modelInterfaceName,
    modelInterfacePath,
    modelPrimaryKeyName,
  } = parsedSchema;
  const templateName = deriveControllerInterfaceTemplateName(methodName, inputKeyword);
  const parsedSchemaRevised = parsedSchema;

  if (methodName === createKeyword || methodName === updateKeyword) {
    const program = TJS.getProgramFromFiles([modelInterfacePath]);
    const modelInterfaceJson = TJS.generateSchema(program, modelInterfaceName);

    if (methodName === createKeyword) {
      parsedSchemaRevised.fieldNames = deriveCreateFieldsFromModelInterfaceProperties(
        modelInterfaceJson.properties,
        modelPrimaryKeyName,
      );
    } else {
      parsedSchemaRevised.fieldNames = deriveUpdateFieldsFromModelInterfaceProperties(
        modelInterfaceJson.properties,
        modelPrimaryKeyName,
      );
    }
  }

  return {
    baseName,
    contents: fsTemplate.getContents(templateName, parsedSchemaRevised),
    name: controllerInterfaceName,
  };
};
