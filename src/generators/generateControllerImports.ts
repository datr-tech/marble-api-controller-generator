import { keywords } from '@app-macg/config';
import { controllers } from '@app-macg/controllers';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateControllerImports = ({ parsedSchema }) => {
  const { methodName } = parsedSchema;
  const parsedSchemaRevised = parsedSchema;
  parsedSchemaRevised.useTypes =
    methodName !== keywords.read && methodName !== keywords.update;

  return fsTemplate.getContents(
    controllers.getImportsTemplateName(),
    parsedSchemaRevised,
  );
};
