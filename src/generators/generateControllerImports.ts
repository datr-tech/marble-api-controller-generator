import { controllers } from '@app-macg/controllers';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateControllerImports = ({ parsedSchema }) =>
  fsTemplate.getContents(controllers.getImportsTemplateName(), parsedSchema);
