import { keywords } from '@app-macg/config';
import * as TJS from 'typescript-json-schema';
import { getRevisedCreateFields } from './getRevisedCreateFields';
import { getRevisedUpdateFields } from './getRevisedUpdateFields';

export const getRevisedFieldsPerParsedSchema = ({ parsedSchema }) => {
  const { methodName, modelInterfaceName, modelInterfacePath, modelPrimaryKeyName } =
    parsedSchema;
  const parsedSchemaRevised = parsedSchema;

  if (methodName === keywords.create || methodName === keywords.update) {
    const program = TJS.getProgramFromFiles([modelInterfacePath]);
    const modelInterfaceJson = TJS.generateSchema(program, modelInterfaceName);
    const properties =
      modelInterfaceJson && typeof modelInterfaceJson.properties !== 'undefined'
        ? modelInterfaceJson.properties
        : {};

    parsedSchemaRevised.fields =
      methodName === keywords.create
        ? getRevisedCreateFields(properties, modelPrimaryKeyName)
        : getRevisedUpdateFields(properties, modelPrimaryKeyName);
  } else {
    parsedSchemaRevised.fields = [
      {
        controllerType: keywords.typesObjectId,
        interfaceType: keywords.typesObjectId,
        key: modelPrimaryKeyName,
        optionalInController: false,
        optionalInInterface: false,
      },
    ];
  }

  return parsedSchemaRevised;
};
